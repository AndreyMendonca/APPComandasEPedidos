import { Alert, Pressable, Text, View } from "react-native"
import Icon from '@expo/vector-icons/FontAwesome6';
import { Categoria } from "../types/categoria";
import { CategoriaService } from "../services/categoriaService";
import { router } from "expo-router";

type Props = {
    data: Categoria;
}

export const OpcaoCategoria = ({data} : Props) =>{

    const handleExcluir = async () => {
        try{
            await CategoriaService.delete(data.id); 
            router.replace("/cadastros/categorias");
        }catch(error: any){
            Alert.alert(
                "Erro ao excluir",
                error.message,
                [],
                { cancelable: true }
            )
        }
    }

    const alertaDeConfirmarAcao = () => {
        Alert.alert(
            "Excluir", 
            "Tem certeza que deseja excluir?", 
            [
                {
                    text: "Não quero",
                    style: "cancel", 
                },
                {
                    text: "Sim, quero!!!",
                    onPress: () => handleExcluir()
                },
                ],
            { cancelable: false } 
        );
    };

    return (
        <View className="bg-gray-200 m-3 p-4 rounded-xl flex-row justify-between items-center">
            <View>
                <Text className="font-semibold text-xl">{data.nome}</Text>
            </View>
            <View className="flex-row">
                <Pressable className="items-center mr-4">
                    <Icon name="pen-to-square"  size={20} color="black"  />
                    <Text> Editar </Text>
                </Pressable>
                <Pressable onPress={alertaDeConfirmarAcao} className="items-center">
                    <Icon name="trash-can"  size={20} color="red"  />
                    <Text className="color-red-600"> Excluir </Text>
                </Pressable>
            </View>
        </View>
    )
}
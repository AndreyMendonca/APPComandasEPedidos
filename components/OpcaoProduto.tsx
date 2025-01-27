import { Pressable, Text, View } from "react-native"
import Icon from '@expo/vector-icons/FontAwesome6';
import { Produto } from "../types/produtos";


type Props = {
    data: Produto;
}

export const OpcaoProduto = ( {data}: Props) => {

    const handleExcluir = () =>{

    }

    return (
        <View className="bg-gray-200 m-3 p-4 rounded-xl flex-row justify-between items-center">
            <View className="">
                <Text className="font-semibold text-xl mr-">{data.nome}</Text>
                <Text className="font-normal text-l">R$ {data.precoVenda} </Text>
            </View>
            <View className="flex-row">
                <Pressable className="items-center mr-4">
                    <Icon name="pen-to-square"  size={20} color="black"  />
                    <Text> Editar </Text>
                </Pressable>
                <Pressable onPress={handleExcluir} className="items-center">
                    <Icon name="trash-can"  size={20} color="red"  />
                    <Text className="color-red-600"> Excluir </Text>
                </Pressable>
            </View>
        </View>
    )
}
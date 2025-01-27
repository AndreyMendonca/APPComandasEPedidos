import { Pressable, Text, TextInput, View } from "react-native"
import Icon from '@expo/vector-icons/FontAwesome6';
import { router } from "expo-router";


type Props = {
    rota: string;
}


export const BuscaECadastro = ({rota} : Props) =>{

    const handlePress = () =>{
        
    }
    
    const handleCadastro = () =>{
        router.push(rota)
    }

    return (
        <View className="border-2 border-solid m-3 rounded-xl flex-row justify-between items-center p-2">
            <View>
                <TextInput placeholder="Procurar..." className="border-2 rounded-xl p-3 w-60"/>
            </View>
            <Pressable onPress={handlePress} className="items-center mr-4">
                <Icon name="magnifying-glass" size={20} color="black"/>
                <Text>Cadastrar</Text>
            </Pressable>
            <Pressable onPress={handleCadastro} className="items-center mr-4">
                <Icon name="square-plus" size={20} color="green"/>
                <Text className="color-green-800">Cadastrar</Text>
            </Pressable>
        </View>
    )
}
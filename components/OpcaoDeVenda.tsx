import { Pressable, Text, View } from "react-native"
import Icon from '@expo/vector-icons/FontAwesome6';
import { router } from "expo-router";


type Props = {
    descricao: string;
    icone: string
    cor?: string;
    rota: string;
}

export const OpcaoDeVenda = ({descricao, icone, cor, rota} : Props) =>{
    return (
        <Pressable onPress={ () => router.push(rota)} className={cor}>
            <View className="flex-row justify-center p-4 items-center">
                <Icon name={icone} size={24} color="white"/>
                <Text className="color-white font-semibold text-xl ml-6">{descricao}</Text>
            </View>
        </Pressable>
    )
}
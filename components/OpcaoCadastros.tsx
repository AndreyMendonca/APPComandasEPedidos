import { Pressable, Text } from "react-native"
import Icon from '@expo/vector-icons/FontAwesome6';
import { router } from "expo-router";

type Props = {
    identificacao: string, 
    icone: string;
    rota: string;
}

export const OpcaoDeCadastro = ({identificacao, icone, rota}:Props) => {

    const handleLink = () =>{
        router.push(rota)
    }

    return (
        <Pressable onPress={handleLink} className="bg-gray-200 items-center rounded-xl mr-2 py-4 w-[48%]">
            <Icon name={icone} size={28} color="black" />
            <Text className="font-semibold text-xl">{identificacao}</Text>
        </Pressable>
    )
}
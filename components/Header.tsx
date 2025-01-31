import { Pressable, SafeAreaView, Text, View } from "react-native"
import Icon from '@expo/vector-icons/FontAwesome6';
import { router } from "expo-router";

type Props = {
    nome: string;
    voltar?: boolean;
    rota?: string;
}

export const Header = ({nome, voltar = false, rota = ""} : Props) =>{

    const handlePress = () =>{
        if(rota === ""){
            router.back();
        }else{
            router.replace(rota);
        }
    }

    return (
        <SafeAreaView className="bg-blue-700 rounded-b-2xl flex-row pl-4 items-center">
            
            {
                voltar === true &&
                <Pressable onPress={handlePress}>
                    <Icon name="arrow-left" size={28} color="white"/>
                </Pressable>
            }

            
            <Text className="text-white font-semibold text-3xl p-2"> {nome} </Text>

        </SafeAreaView>
    )
}
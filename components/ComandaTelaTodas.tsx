import { Pressable, Text, View } from "react-native"
import { Comanda } from "../types/comanda"
import { router } from "expo-router";


type Props = {
    data: Comanda;
}

export const ComandaTelaTodas = ( {data}: Props) =>{
    return (
        <Pressable onPress={() => router.push(`comanda/fechamento/${data.id}`)} className="bg-gray-300 h-40 rounded-xl mx-4 mb-4 p-4">
            <View className="flex-row">
                <Text className="font-semibold text-xl mr-2 w-32">Nome: </Text>
                <Text className="font-bold text-xl">{data?.identificacao}  {data?.id}</Text>
            </View>
            <View className="flex-row">
                <Text className="font-semibold text-xl mr-2 w-32">Aberta: </Text>
                <Text className="font-bold text-xl">{(data?.aberta) ? "Sim" : "Não" }</Text>
            </View>
            <View className="flex-row">
                <Text className="font-semibold text-xl mr-2 w-32">Abertura: </Text>
                <Text className="font-bold text-xl"> {new Date(data.abertura).toLocaleString()}</Text>
            </View>
            <View className="flex-row">
                <Text className="font-semibold text-xl mr-2 w-32">Fechamento: </Text>
                <Text className="font-bold text-xl"> {(data.fechamento === null) ? "---" : new Date(data?.fechamento).toLocaleString()}</Text>
            </View>
            <View className="items-center">
                <Text>[ CLIQUE NO CARD PARA MAIS INFORMAÇÕES ] </Text>
            </View>
        </Pressable>
    )
}
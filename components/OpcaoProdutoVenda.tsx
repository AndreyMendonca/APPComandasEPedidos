import { Text, View } from "react-native"
import Icon from '@expo/vector-icons/FontAwesome6';
import { Produto } from "../types/produtos";

type Props = {
    data: Produto;
}

export const OpcaoProdutoVenda = ({data} : Props) =>{
    return (
        <View className="h-20 mb-2 w-[99%] bg-slate-300 rounded-xl flex-row justify-between items-center p-4">
            <View>
                <Text className="font-semibold">{data.nome}</Text>
                <Text className="font-semibold">{data.precoVenda.toFixed(2)}</Text>
            </View>
            <View className="flex-row items-center">
                <Icon name="circle-minus" size={28} color="white"/>
                <Text className="font-bold text-4xl"> 0 </Text>
                <Icon name="circle-plus" size={28} color="white"/>
            </View>
        </View>
    )
}
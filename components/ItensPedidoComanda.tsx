import { Text, View } from "react-native"
import { ItemPedido } from "../types/comanda"

type Props = {
    data ?: ItemPedido;
}

export const ItensPedidoComanda = ( {data} : Props) =>{
    return (
        <View className="border-2 p-2 rounded-lg mb-2">
            <View className="flex-row"> 
                <Text className="w-28">Produto:</Text>
                <Text>{data?.produto.nome}</Text>
            </View>
            <View className="flex-row"> 
                <Text className="w-28">Valor Unitário:</Text>
                <Text>R$ {data?.produto.precoVenda.toFixed(2)}</Text>
            </View>
            <View className="flex-row"> 
                <Text className="w-28">Quantidade:</Text>
                <Text>{data?.quantidade}</Text>
            </View>
            <View className="flex-row"> 
                <Text className="w-28 font-semibold">Total:</Text>
                <Text className="font-semibold">R$ {data?.totalValorParciar.toFixed(2)}</Text>
            </View>
        </View>
    )
}
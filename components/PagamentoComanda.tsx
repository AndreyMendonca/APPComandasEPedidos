import { Text, View } from "react-native"
import { Pagamento } from "../types/comanda"

type Props = {
    data ?: Pagamento;
}

export const PagamentoComanda = ( {data} : Props) =>{
    return (
        <View className="border-2 p-2 rounded-lg mb-2">
            <View className="flex-row items-center"> 
                <Text className="w-28">Forma de Pagamento:</Text>
                <Text>{data?.formaDePagamento.identificacao}</Text>
            </View>
            <View className="flex-row"> 
                <Text className="w-28">Valor Pago:</Text>
                <Text>R$ {data?.valorPago.toFixed(2)}</Text>
            </View>
        </View>
    )
}
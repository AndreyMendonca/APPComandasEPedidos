import { FlatList, Text, View } from "react-native";
import { Comanda, ItemPedido, Pagamento } from "../types/comanda"
import { ItensPedidoComanda } from "./ItensPedidoComanda";
import { PagamentoComanda } from "./PagamentoComanda";

type Props = {
    data: Comanda;
}

export const ComandaCompleta = ({data} : Props) => {
    return (
        <View className=" bg-gray-200 rounded-xl p-3 m-2">
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
            <View className="h-1 bg-white my-3"></View>
            <View className="h-96">
                <Text>Pagamentos: </Text>
                {
                    data?.pedido.pagamento?.length > 0 &&
                        <FlatList 
                            data={data.pedido?.pagamento}
                            renderItem={ ( {item} : {item:Pagamento} ) =>
                            (<PagamentoComanda data={item}/>)
                            }
                            keyExtractor={item => item?.id.toString()}
                            className="h-32"
                        />
                }
                
                <Text>Pedidos:</Text>
                <FlatList
                    data={data.pedido?.itens}
                    renderItem={ ( {item} : {item:ItemPedido} ) => 
                        (<ItensPedidoComanda data={item} />)

                    }
                    keyExtractor={item => item?.produto.id.toString()}
                />
            </View>
            <View className="h-1 bg-white my-3"></View>
            <View className="flex-row justify-end">
                <Text className="font-semibold text-xl mr-2">Total a pagar: </Text>
                <Text className="font-bold text-4xl">R$ {data.pedido.valorTotalFinal.toFixed(2)}</Text>
            </View>
            <View className="flex-row justify-end">
                <Text className="font-semibold text-sm mr-2">Total pago: </Text>
                <Text className="font-bold text-sm">R$ {data.pedido.pagamentoTotal.toFixed(2)}</Text>
            </View>
            <View className="h-1 bg-white my-3"></View>
        </View>
        
    )
}
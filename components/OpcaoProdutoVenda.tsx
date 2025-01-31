import { Pressable, Text, View } from "react-native"
import Icon from '@expo/vector-icons/FontAwesome6';
import { Produto } from "../types/produtos";
import { useEffect, useState } from "react";
import { ItensPedido } from "../types/comanda";

type Props = {
    data: Produto;
    addItem: (itemPedido: ItensPedido, soma: boolean) => void;
}

export const OpcaoProdutoVenda = ({data, addItem} : Props) =>{

    const [quantidade, setQuantidade] = useState(0);

    const [itemPedido, setItemPedido] = useState<ItensPedido>({idProduto: data.id, quantidade:0 });

    const handleMenos = () =>{
        if(quantidade > 0){
            const novaQuantidade = quantidade - 1;
            setQuantidade(novaQuantidade);

            const novoItemPedido = { ...itemPedido, quantidade: novaQuantidade };

            setItemPedido(novoItemPedido)

            addItem(itemPedido, false)
        }
    }
    const handleMais = () =>{
        const novaQuantidade = quantidade + 1;
        setQuantidade(novaQuantidade);

        console.log(novaQuantidade + "nova quantidade")

        const novoItemPedido = { ...itemPedido, quantidade: novaQuantidade };

        setItemPedido(novoItemPedido)
        console.log(itemPedido);
        addItem(itemPedido, true)
    }


    return (
        <View className="h-20 mb-2 w-[99%] bg-slate-300 rounded-xl flex-row justify-between items-center p-4">
            <View>
                <Text className="font-semibold">{data.nome}</Text>
                <Text className="font-semibold">{data.precoVenda.toFixed(2)}</Text>
            </View>
            <View className="flex-row items-center">
                <Pressable onPress={handleMenos}>
                    <Icon name="circle-minus" size={28} color="white"/>
                </Pressable>
                <Text className="font-bold text-4xl"> {quantidade} </Text>
                <Pressable onPress={handleMais}>
                    <Icon name="circle-plus" size={28} color="white"/>
                </Pressable>
            </View>
        </View>
    )
}
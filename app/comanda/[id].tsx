import { router, useLocalSearchParams } from "expo-router";
import { Text, View, ScrollView, Pressable, SafeAreaView, FlatList, Button } from "react-native";
import { Header } from "../../components/Header";
import { OpcaoCategoriaVenda } from "../../components/OpcaoCategoriaVenda";
import Icon from '@expo/vector-icons/FontAwesome6';
import { OpcaoProdutoVenda } from "../../components/OpcaoProdutoVenda";
import { useEffect, useState } from "react";
import { Produto } from "../../types/produtos";
import { ProdutoService } from "../../services/produtoService";
import { Comanda, ItensPedidoDTO, PedidoDTO } from "../../types/comanda";
import { ComandaService } from "../../services/comandaService";


export default function Screen(){
    const {id} = useLocalSearchParams();

    const [produto, setProdutos] = useState<Produto[]>([]);

    const [pedido, setPedido] = useState<PedidoDTO>({itens: []});

    const [comanda, setComanda] = useState<Comanda>();

    const getById = async () =>{
        try{
            console.log('cheguei aqui')
            console.log({id})
            const response = await ComandaService.getById(id.toString())
            setComanda(response)
        }catch(error){
            return 0;
        }
    }

    const listaProdutos = async () => {
        try{
            const lista = await ProdutoService.getAll();  
            setProdutos(lista);      
        }catch(error){
            return 0;
        }
    }

    useEffect( () =>{
        getById()
    }, []);

    useEffect( () =>{
        listaProdutos()
    }, []);

    useEffect(() => {
        console.log("Pedido atualizado:", pedido);
    }, [pedido]);

    const adicionarItemAoPedido= (item: ItensPedidoDTO, soma:boolean) =>{
        if (!pedido) return console.log("não funcionou");

        setPedido((prevPedido) => {
            if (!prevPedido) return { itens: [item] }; // Garante que o estado não fique undefined
    
            const itensAtualizados = prevPedido.itens.map((i) =>
                i.idProduto === item.idProduto ? { ...i, quantidade: (item.quantidade || 0)+ (soma ? 1 : -1)} : i
                
            );
    
            const existe = prevPedido.itens.some(i => i.idProduto === item.idProduto);
            
            return {
                ...prevPedido,
                itens: existe ? itensAtualizados : [...prevPedido.itens, item]
            };
        });
    }

    const handleLancarPedido = async () =>{
        try{
            const responta = await ComandaService.lancarItensAComanda(id.toString(), pedido);
            router.replace("vendas/comandas")
            alert("Item lançados a comanda")
        }catch(error){
            console.log("Erro ao cadastrar: " + error)
        }
    }

    return (
        <SafeAreaView className="flex-1">
            <Header nome="Lançamento Item" voltar={true}></Header>
            <View className="m-2 flex-row h-24 items-center justify-between">
                <View>
                    <Text className="text-xl">Identificação: {comanda?.identificacao}</Text>
                    <Text>Valor total: R$ 2.00</Text>
                </View>
                <Pressable onPress={() => router.push(`comanda/fechamento/${id}`)} className="flex-row items-center w-36 h-20 justify-center bg-green-700 rounded-lg">
                    <Icon name="hand-holding-dollar" size={20} color="white"/>
                    <View className="items-center">
                        <Text className="color-white ml-8">Fechar</Text>
                        <Text className="color-white ml-8">Comanda</Text>
                    </View>
                </Pressable>
            </View>
            
            <View className="h-1 bg-gray-200 mb-2"></View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mx-2 h-28">
                <OpcaoCategoriaVenda />
                <OpcaoCategoriaVenda />
                <OpcaoCategoriaVenda />
                <OpcaoCategoriaVenda />
            </ScrollView>

            <View className="h-1 bg-gray-200 mt-2 mb-2"></View>

            <FlatList 
                data={produto}
                renderItem={ ( {item} : {item:Produto} ) => 
                    (<OpcaoProdutoVenda data={item} addItem={adicionarItemAoPedido}/>)
                }
                keyExtractor={item => item?.id.toString()}
                className="mx-2"
            />


            

            <View className="mx-2 flex-row h-24 items-center justify-center">
                <Pressable onPress={() => router.replace("vendas/comandas")} className="flex-row items-center justify-center p-2 m-2 bg-red-600 rounded-lg">
                    <Icon name="trash-can" size={20} color="white"/>
                    <View className="items-center">
                        <Text className="color-white ml-8">Cancelar</Text>
                        <Text className="color-white ml-8">Pedido</Text>
                    </View>
                </Pressable>
                <Pressable className="flex-row items-center   justify-center m-2 bg-yellow-300 p-2 rounded-lg">
                    <Icon name="calendar-days" size={20} color="white"/>
                    <View className="items-center">
                        <Text className="color-white ml-8">Revisar</Text>
                        <Text className="color-white ml-8">Pedido</Text>
                    </View>
                </Pressable>
                <Pressable onPress={handleLancarPedido} className="flex-row items-center justify-center p-2 m-2 bg-green-700 rounded-lg">
                    <Icon name="cart-plus" size={20} color="white"/>
                    <View className="items-center">
                        <Text className="color-white ml-8">Lançar</Text>
                        <Text className="color-white ml-8">Items</Text>
                    </View>
                </Pressable>
            </View>
            
        </SafeAreaView>
    )
}
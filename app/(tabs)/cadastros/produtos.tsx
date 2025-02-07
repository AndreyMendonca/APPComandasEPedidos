import { Alert, FlatList, Text, View } from "react-native";
import { Header } from "../../../components/Header";
import { OpcaoProduto } from "../../../components/OpcaoProduto";
import { BuscaECadastro } from "../../../components/BuscaECadastro";
import { useEffect, useState } from "react";
import { Produto } from "../../../types/produtos";
import { ProdutoService } from "../../../services/produtoService";

export default function Screen(){

    const [produto, setProdutos] = useState<Produto[]>([]);

    const listaProdutos = async () => {
        try{
            const lista = await ProdutoService.getAll();  
            setProdutos(lista);      
        }catch(error){
            return 0;
        }
    }
    
    useEffect( () =>{
        listaProdutos();
    }, []);

    return (
        <View className="flex-1">
            <Header nome="Produtos" voltar={true} rota="/cadastros/listaDeCadastros"/>
            <BuscaECadastro rota="/cadastros/produtosCadastros"/>

            <FlatList
                data={produto}
                renderItem={ ( {item} : {item:Produto} ) => 
                    (<OpcaoProduto data={item}/>)
                }
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}
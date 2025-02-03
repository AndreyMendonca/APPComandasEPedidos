import { FlatList, SafeAreaView, ScrollView } from "react-native";
import { Header } from "../../../components/Header";
import { BuscaECadastro } from "../../../components/BuscaECadastro";
import { ComandaAberta } from "../../../components/ComandaAberta";
import { useEffect, useState } from "react";
import { Comanda } from "../../../types/comanda";
import { ComandaService } from "../../../services/comandaService";
import { router } from "expo-router";

export default function Screen(){

    const [comandas, setComandas] = useState<Comanda[]>([]) 

    const listaComandasAtivas = async () =>{
        try {
            const lista =  await ComandaService.getAbertas();
            setComandas(lista);
        } catch (error) {
            return 0;
        }
    }

    useEffect(() =>{
        listaComandasAtivas();
    }, [])


    return(
        <SafeAreaView className="flex-1">
            <Header nome="Comandas" voltar={true} rota="vendas/opcaoDeVenda"/>
            <BuscaECadastro rota="/vendas/aberturaComanda"/>
            <FlatList 
                data={comandas}
                renderItem={ ( {item} : {item:Comanda}) =>
                    (<ComandaAberta data={item} />)
                }
                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>
    )
}
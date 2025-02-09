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

    const findByIdentificacao = async (identificacao: string) =>{
        try{
            const lista = await ComandaService.getByIdentificacao(identificacao);
            setComandas(lista);
        }catch(erro){
            return 0;
        }
    }

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
            <Header nome="Comandas"/>
            <BuscaECadastro rota="/vendas/aberturaComanda" busca={findByIdentificacao} todos={listaComandasAtivas}/>
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
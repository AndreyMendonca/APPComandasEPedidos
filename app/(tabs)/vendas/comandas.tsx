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

    const handleFecharComanda = async (id: string) =>{
        try{
            const responta = await ComandaService.fecharComanda(id);
            router.replace("vendas/comandas")
            alert("Comanda fechada com sucesso")
        }catch(error){
            console.log("Erro ao cadastrar: " + error)
        }
    }

    return(
        <SafeAreaView className="flex-1">
            <Header nome="Comandas" voltar={true}/>
            <BuscaECadastro rota="/vendas/aberturaComanda"/>
            <FlatList 
                data={comandas}
                renderItem={ ( {item} : {item:Comanda}) =>
                    (<ComandaAberta data={item} fecharComanda={handleFecharComanda}/>)
                }
                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>
    )
}
import { SafeAreaView, Text, View } from "react-native";
import { Header } from "../../../components/Header";
import { useEffect, useState } from "react";
import { Comanda } from "../../../types/comanda";
import { ComandaService } from "../../../services/comandaService";
import { useLocalSearchParams } from "expo-router";
import { ComandaCompleta } from "../../../components/ComandaCompleta";
import { LancarPagamento } from "../../../components/lancarPagamento";

export default function Screen(){
    const {id} = useLocalSearchParams();
    const [comanda, setComanda] = useState<Comanda>({
        id: 0,
        identificacao: '',
        aberta: true,
        abertura: '',
        fechamento: null,
        pedido: {
            id: 0,
            itens: [],
            valorTotalFinal: 0,
            pagamentoTotal: 0
        }
    });

    useEffect(() => {
        if (comanda) {
          console.log("Itens do pedido (atualizado):", comanda.pedido?.itens);
        }
      }, [comanda]);

    useEffect( () =>{
        getById()
    }, []);

    const getById = async () =>{
        try{
            const response = await ComandaService.getById(id.toString())
            console.log(response)
            console.log(JSON.stringify(response, null, 2));
            setComanda(response)
            console.log("Itens do pedido:", comanda.pedido?.itens);
        }catch(error){
            return 0;
        }
    }


    return (
        <SafeAreaView className="flex-1">
            <Header nome="Fechar comanda" voltar={true}/>
            <ComandaCompleta data={comanda}/>
            <LancarPagamento />
        </SafeAreaView>
    )
}
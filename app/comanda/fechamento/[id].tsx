import { SafeAreaView, Text, View } from "react-native";
import { Header } from "../../../components/Header";
import { useEffect, useState } from "react";
import { Comanda } from "../../../types/comanda";
import { ComandaService } from "../../../services/comandaService";
import { useLocalSearchParams } from "expo-router";

export default function Screen(){
    const {id} = useLocalSearchParams();
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
    useEffect( () =>{
        getById()
    }, []);

    return (
        <SafeAreaView>
            <Header nome="Fechar comanda" voltar={true}/>
            <Text>Comanda {id}</Text>
            <Text>{comanda?.identificacao}</Text>
            <Text>{comanda?.abertura}</Text>
            <Text>{comanda?.fechamento}</Text>
        </SafeAreaView>
    )
}
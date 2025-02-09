import { FlatList, SafeAreaView } from "react-native";
import { Header } from "../../../components/Header";
import { ComandaTelaTodas } from "../../../components/ComandaTelaTodas";
import { useEffect, useState } from "react";
import { Comanda } from "../../../types/comanda";
import { ComandaService } from "../../../services/comandaService";

export default function Screen(){

    const [comandas, setComandas] = useState<Comanda[]>([]);

    const lista = async () =>{
        try{
            const lista = await ComandaService.getAll();
            setComandas(lista);
        }catch(erro){
            return 0;
        }
    }

    useEffect(() =>{
        lista()
    }, [])

    return (
        <SafeAreaView className="flex-1">
            <Header voltar={true} nome="Historico das comandas" rota="/vendas/comandas"/>
            <FlatList 
                data={comandas}
                renderItem={ ( {item} : {item:Comanda} ) => 
                    (<ComandaTelaTodas data={item} />)
                }
                keyExtractor={item => item?.id.toString()}
                className="my-5"
            />
        </SafeAreaView>
    );
}
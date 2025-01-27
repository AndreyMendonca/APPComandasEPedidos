import { FlatList , SafeAreaView} from "react-native";
import { Header } from "../../../components/Header";
import { OpcaoCategoria } from "../../../components/OpcaoCategoria";
import { BuscaECadastro } from "../../../components/BuscaECadastro";
import { useEffect, useState } from "react";
import { CategoriaService } from "../../../services/categoriaService";
import { Categoria } from "../../../types/categoria";

export default function Screen(){

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const listaCategorias = async () => {
        try{
            const lista = await CategoriaService.getAll();  
            setCategorias(lista);      
        }catch(error){
            return 0;
        }
    }

    useEffect( () =>{
        listaCategorias();
    }, []);


    return (
        <SafeAreaView className="flex-1 bg-white">
            <Header nome="Categorias" voltar={true}/>
            <BuscaECadastro rota="/cadastros/categoriasCadastro"/>

            <FlatList
                data={categorias}
                renderItem={ ( {item} : {item:Categoria} ) => 
                    (<OpcaoCategoria data={item}/>)
                }
                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>
    )
}
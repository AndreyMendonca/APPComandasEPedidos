import { ScrollView, Text, View } from "react-native";
import { Header } from "../../../components/Header";
import { OpcaoCategoria } from "../../../components/OpcaoCategoria";
import { BuscaECadastro } from "../../../components/BuscaECadastro";

export default function Screen(){
    return (
        <View className="h-screen bg-white">
            <Header nome="Categorias" voltar={true}/>
            <BuscaECadastro rota="/cadastros/categoriasCadastro"/>
            <ScrollView> 
                <OpcaoCategoria/>
                <OpcaoCategoria/>
            </ScrollView>
        </View>
    )
}
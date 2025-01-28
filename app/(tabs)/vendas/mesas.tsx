import { SafeAreaView, Text } from "react-native";
import { Header } from "../../../components/Header";
import { BuscaECadastro } from "../../../components/BuscaECadastro";

export default function Screen(){
    return(
        <SafeAreaView>
            <Header nome="Mesas" voltar={true}/>
            <BuscaECadastro rota=""/>
        </SafeAreaView>
    )
}
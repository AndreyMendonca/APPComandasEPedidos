import { SafeAreaView, ScrollView, Text } from "react-native";
import { Header } from "../../../components/Header";
import { BuscaECadastro } from "../../../components/BuscaECadastro";
import { ComandaAberta } from "../../../components/ComandaAberta";

export default function Screen(){
    return(
        <SafeAreaView className="flex-1">
            <Header nome="Comandas" voltar={true}/>
            <BuscaECadastro rota=""/>
            <ScrollView className="m-2">
                <ComandaAberta/>
                <ComandaAberta/>
                <ComandaAberta/>
                <ComandaAberta/>
                <ComandaAberta/>
                <ComandaAberta/>
                <ComandaAberta/>
                <ComandaAberta/>
                <ComandaAberta/>
                <ComandaAberta/>
                <ComandaAberta/>
                <ComandaAberta/>
                <ComandaAberta/>
                <ComandaAberta/>
                <ComandaAberta/>
            </ScrollView>
        </SafeAreaView>
    )
}
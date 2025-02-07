import { Text, View } from "react-native";
import { Header } from "../../../components/Header";

export default function Screen(){
    return (
        <View>
            <Header nome="Adicionais" voltar={true} rota="/cadastros/listaDeCadastros" />
            <Text>Adicionais</Text>
        </View>
    )
}
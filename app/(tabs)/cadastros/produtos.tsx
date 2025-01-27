import { Text, View } from "react-native";
import { Header } from "../../../components/Header";

export default function Screen(){
    return (
        <View>
            <Header nome="Produtos" voltar={true} />
            <Text>Produtos</Text>
        </View>
    )
}
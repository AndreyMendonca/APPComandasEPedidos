import { Text, View } from "react-native";
import { Header } from "../../../components/Header";

export default function Screen(){
    return (
        <View>
            <Header nome="Complementos" voltar={true} />
            <Text>Complementos</Text>
        </View>
    )
}
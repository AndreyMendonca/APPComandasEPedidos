import { Text, View } from "react-native";
import { Header } from "../../../components/Header";
import Icon from '@expo/vector-icons/FontAwesome6';

export default function Screen(){
    return (
        <View className="flex-1">
            <Header nome="Complementos" voltar={true} />
            <View className="flex-1 items-center justify-center">
                <Icon name="gears" size={100} color="black" />
                <Text className="font-semibold text-3xl">Em Breve.... </Text>
                <Text className="font-normal text-xl">Cadastros de complementos aos produtos.... </Text>
            </View>
        </View>
    )
}
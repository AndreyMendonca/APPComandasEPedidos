import { SafeAreaView, Text, View } from "react-native";
import { Header } from "../../../components/Header";
import { OpcaoDeVenda } from "../../../components/OpcaoDeVenda";

export default function Screen(){
    return (
        <SafeAreaView className="h-full bg-white">
            <Header nome="Vender"/>
            <View className="h-full justify-center items-center">
                <OpcaoDeVenda descricao="Venda Rápida" icone="cart-arrow-down" cor="bg-red-500 mb-8 w-[90%] rounded-xl" rota=""/>
                <OpcaoDeVenda descricao="Mesas" icone="table" cor="bg-green-500 mb-8 w-[90%] rounded-xl" rota="/vendas/mesas"/>
                <OpcaoDeVenda descricao="Comandas" icone="receipt" cor="bg-yellow-500 mb-8 w-[90%] rounded-xl" rota="/vendas/comandas"/>
            </View>
        </SafeAreaView>
    )
}
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from '@expo/vector-icons/FontAwesome6';
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { RelatorioVenda } from "../../types/comanda";
import { ComandaService } from "../../services/comandaService";

export default function Screen(){

    const [relatorio, setRelatorio] = useState<RelatorioVenda>({vendasDia: 0, totalReaisDia: 0, totalReaisMes: 0});

    const gerarRelatorio = async () =>{
        try{
            const data = await ComandaService.relatorio();
            setRelatorio(data);
        }catch(error){
            return 0;
        }
    }

    useEffect(()=>{
        gerarRelatorio()
    }, [])


    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="bg-blue-700 rounded-b-xl flex-row p-6">
                <Text className="text-white text-2xl mr-6">Seja bem vindo</Text>
                <Icon name="burger" size={24} color="white"/>
                <Icon name="beer-mug-empty" size={24} color="white"/>
                <Icon name="drumstick-bite" size={24} color="white"/>
                <Icon name="mug-hot" size={24} color="white"/>
            </View>
            
            <View className="bg-blue-400 rounded-xl flex p-6 m-2">
                <Text className="text-white text-2xl">--Nome da empresa</Text>
                <Pressable className="bg-white rounded-xl h-20 mb-2 items-center flex-row justify-center">
                    <Text className="text-2xl mr-6">Dados da empresa</Text>
                    <Icon name="clipboard" size={24} color="black"/>
                </Pressable>
                <Pressable className="bg-white rounded-xl h-20 mb-2 items-center flex-row justify-center">
                    <Text className="text-2xl mr-6">Configuração da empresa</Text>
                    <Icon name="gear" size={24} color="black"/>
                </Pressable>
            </View>

            <View className="bg-blue-400 rounded-xl flex p-6 m-2">
                <Text className="text-white text-2xl">--Relatórios Rápidos</Text>
                <View className="bg-white rounded-xl h-20 mb-2 items-center flex-row justify-center">
                    <Text className="text-2xl mr-6">Total de Vendas no dia:</Text>
                    <Text className="text-2xl font-semibold">{relatorio.vendasDia}</Text>
                </View>
                <View className="bg-white rounded-xl h-20 mb-2 items-center flex-row justify-center">
                    <Text className="text-2xl mr-6">Total de R$ no dia</Text>
                    <Text className="text-2xl font-semibold">R$ {relatorio.totalReaisDia.toFixed(2)}</Text>
                </View>
                <View className="bg-white rounded-xl h-20 mb-2 items-center flex-row justify-center">
                    <Text className="text-2xl mr-6">Total de R$ no mês</Text>
                    <Text className="text-2xl font-semibold">R$ {relatorio.totalReaisMes.toFixed(2)}</Text>
                </View>
                <Pressable onPress={() => router.push("/vendas/todasComandas")} className="bg-gray-400 rounded-xl h-12 mt-8 items-center flex-row justify-center">
                    <Text className="text-2xl mr-6">Ver histórico de comandas </Text>
                    <Icon name="chart-line" size={24} color="black"/>
                </Pressable>
            </View>

            <View className="bg-blue-400 rounded-xl flex-row items-center p-6 m-2">
                <Pressable className="rounded-xl h-14 mb-2 items-center flex-row justify-center">
                    <Text className="text-white text-2xl mr-8">Suporte</Text>
                    <Text className="text-2xl mr-6">Click para chamar</Text>
                    <Icon name="whatsapp" size={24} color="black"/>
                </Pressable>
            </View>

        </SafeAreaView>
    )
}
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from '@expo/vector-icons/FontAwesome6';

export default function Screen(){
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
                    <Text className="text-2xl font-semibold">10</Text>
                </View>
                <View className="bg-white rounded-xl h-20 mb-2 items-center flex-row justify-center">
                    <Text className="text-2xl mr-6">Total de R$ no dia</Text>
                    <Text className="text-2xl font-semibold">R$ 100,00</Text>
                </View>
                <View className="bg-white rounded-xl h-20 mb-2 items-center flex-row justify-center">
                    <Text className="text-2xl mr-6">Total de R$ no mês</Text>
                    <Text className="text-2xl font-semibold">R$ 1000,00</Text>
                </View>
                <Pressable className="bg-gray-400 rounded-xl h-12 mt-8 items-center flex-row justify-center">
                    <Text className="text-2xl mr-6">Ver todos os relatórios </Text>
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
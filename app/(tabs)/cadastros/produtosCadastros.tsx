import { Button, Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import { Header } from "../../../components/Header";
import { router } from "expo-router";
import { useState } from "react";
import { Categoria } from "../../../types/categoria";
import { CategoriaService } from "../../../services/categoriaService";


export default function Screen(){

    const handleSalvar = async () =>{

    }

    return (
        <SafeAreaView className="h-full bg-white">
            <Header nome="Cadastrar Produtos" voltar={true} />
            <View className="m-6">
                <View className="flex-row items-center bg-gray-200 rounded-3xl mb-4"> 
                    <Text className="font-semibold text-xl m-5">Nome:</Text>
                    <TextInput 
                        placeholder="Digite o nome do produto"
                        className="text-xl" 
                    />
                </View>
                <View className="flex-row items-center bg-gray-200 rounded-3xl mb-4"> 
                    <Text className="font-semibold text-xl m-5">Preço:</Text>
                    <TextInput 
                        keyboardType="numeric"
                        placeholder="Digite o preco do produto"
                        className="text-xl" 
                    />
                </View>
                <View className="flex-row items-center bg-gray-200 rounded-3xl mb-4"> 
                    <Text className="font-semibold text-xl m-5">Categoria:</Text>
                    <TextInput 
                        placeholder="Digite o preco do produto"
                        className="text-xl" 
                    />
                </View>
                <View className="flex-row justify-between">
                    <Pressable onPress={ () => router.back()} className="bg-red-600 rounded-3xl h-16 w-[45%] items-center justify-center">
                        <Text className="text-white font-semibold text-xl">Cancelar</Text>
                    </Pressable>
                    <Pressable onPress={handleSalvar} className="bg-green-700 rounded-3xl h-16 w-[45%] items-center justify-center">
                        <Text className="text-white font-semibold text-xl">Salvar</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}
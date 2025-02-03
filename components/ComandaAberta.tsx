import { Pressable, Text, View } from "react-native"
import Icon from '@expo/vector-icons/FontAwesome6';
import { Comanda } from "../types/comanda";
import { router } from "expo-router";
import { useState } from "react";

type Props = {
    data ?: Comanda
}

export const ComandaAberta = ( {data}: Props ) =>{

    const handleClickComanda = () =>{
        router.push(`/comanda/${data?.id}`)
    }


    return(
        <Pressable onPress={handleClickComanda} className="bg-green-600 m-2 rounded-xl h-20 items-center justify-between flex-row">
            <View className="flex-row items-center ml-6">
                <View className="items-center mr-3">
                    <Text className="text-sm font-medium mr-2">Identifi</Text>
                    <Text className="text-sm font-medium mr-2">cacao: </Text>
                </View>
                
                <Text className="text-2xl font-medium mr-5">{data?.identificacao}</Text>
            </View>

            <View className="flex-row">
                <View className="m-6">
                    <Icon name="circle-plus" size={28} color="white" />
                    <Text className="text-white text-sm">Add</Text>
                </View>
            </View>
        </Pressable>
    )
}
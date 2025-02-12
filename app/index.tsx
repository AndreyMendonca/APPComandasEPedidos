import { Link, router } from "expo-router";
import { Button, Image, Pressable, SafeAreaView, Text, TextInput, View } from "react-native";

export default function Screen(){

    const handleClick = () =>{
        router.replace('/home')
    }
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="items-center h-[40%] justify-center">
                <Image source={require("../assets/logo.png")}   resizeMode="cover"/>
                <Text className="font-semibold text-2xl mt-4">Seu restaurante na </Text>
                <Text className="font-semibold text-2xl"> pauma da sua mão</Text>
            </View>
            <View className="bg-red-600 flex-1 rounded-t-3xl">
                <View className="m-3 p-4 h-20 flex-row bg-white rounded-xl items-center ">
                    <Text className="text-xl font-semibold mr-2"> Email: </Text>
                    <TextInput 
                        placeholder="Login"
                        className="h-11 w-72 text-xl"
                    />
                </View>
                <View className="m-3 p-4 h-20 flex-row bg-white rounded-xl items-center ">
                    <Text className="text-xl font-semibold mr-2"> Senha: </Text>
                    <TextInput 
                        placeholder="Digite a senha"
                         className="h-11 w-72 text-xl"
                        secureTextEntry
                    />
                </View>
                <View className="items-center">
                    <Pressable onPress={handleClick} className="h-16 w-56 bg-black rounded-xl items-center justify-center">
                        <Text className="text-white font-semibold text-xl">Acessar o sistema</Text>    
                    </Pressable>
                    <Link href={'cadastro'} className="mt-5 text-white">
                        <Text className="font-semibold text-lg">Não tem conta? Cadastre-se aqui</Text>
                    </Link>
                </View>

            </View>
        </SafeAreaView>
    )
}
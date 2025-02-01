import { Link, router } from "expo-router";
import { Button, Image, Pressable, SafeAreaView, Text, TextInput, View } from "react-native";

export default function Screen(){

    const handleClick = () =>{
        router.replace('/home')
    }
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="items-center h-[20%] justify-center">
                <Image source={require("../assets/logo.png")}   resizeMode="cover"/>
                <Text className="font-semibold text-4xl mt-4">Crie sua conta </Text>
            </View>
            <View className="bg-red-600 flex-1 rounded-t-3xl">
                <View className="m-3 p-4 h-20 flex-row bg-white rounded-xl items-center ">
                    <Text className="text-xl font-semibold mr-2"> Nome: </Text>
                    <TextInput 
                        placeholder="Digite seu nome"
                        className="w-72 text-xl"
                    />
                </View>
                <View className="m-3 p-4 h-20 flex-row bg-white rounded-xl items-center ">
                    <Text className="text-xl font-semibold mr-2"> Estabelecimento: </Text>
                    <TextInput 
                        placeholder="Nome do estabelecimento"
                        className="h-11 w-72 text-xl"
                    />
                </View>
                <View className="m-3 p-4 h-20 flex-row bg-white rounded-xl items-center ">
                    <Text className="text-xl font-semibold mr-2"> Email: </Text>
                    <TextInput 
                        placeholder="Digite seu e-mail"
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
                        <Text className="text-white font-semibold text-xl">Criar conta</Text>    
                    </Pressable>
                    <Link href={'#'} className="mt-5 text-white">
                        <Text className="font-semibold text-lg">Cancelar</Text>
                    </Link>
                </View>

            </View>
        </SafeAreaView>
    )
}
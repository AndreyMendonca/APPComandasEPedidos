import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native"
import { Header } from "../../../components/Header"
import { router } from "expo-router"
import { ComandaService } from "../../../services/comandaService"
import { useState } from "react"
import { AbrirComanda } from "../../../types/comanda"

export default function Screen(){

    const [abrirComanda, setAbrirComanda] = useState<AbrirComanda>({identificacao : ""});

    const handleCriar = async () =>{
        try{
            const resposta = await ComandaService.abrirComanda(abrirComanda);
            if(resposta){
                alert("Lançe os pedidos")
                router.push(`/comanda/${resposta.id}`) 
            }else{
                setAbrirComanda( {...abrirComanda, identificacao : ""})
                router.reload;
            }
        }catch(error: any){
            alert(error.message)
            setAbrirComanda( {...abrirComanda, identificacao : ""})
        }
    }

    return (
        <SafeAreaView className="flex-1">
            <Header nome="Abrir uma nova comanda" voltar={true}/>
            <View className="m-6">
                <View className="flex-row items-center bg-gray-200 rounded-3xl mb-4"> 
                    <Text className="font-semibold text-xl m-5">Identificação:</Text>
                    <TextInput 
                        value={abrirComanda.identificacao}
                        onChangeText={ texto => setAbrirComanda( {...abrirComanda, identificacao : texto})}
                        placeholder="Digite a identificacao"
                        className="text-xl" 
                    />
                </View>
                <View className="flex-row justify-between">
                    <Pressable onPress={ () => router.back()} className="bg-red-600 rounded-3xl h-16 w-[45%] items-center justify-center">
                        <Text className="text-white font-semibold text-xl">Cancelar</Text>
                    </Pressable>
                    <Pressable onPress={handleCriar} className="bg-green-700 rounded-3xl h-16 w-[45%] items-center justify-center">
                        <Text className="text-white font-semibold text-xl">Abrir</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}
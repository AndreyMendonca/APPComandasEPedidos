import { Button, Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import { Header } from "../../../components/Header";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Categoria } from "../../../types/categoria";
import { CategoriaService } from "../../../services/categoriaService";


export default function Screen(){
    const params  = useLocalSearchParams();
    const [categoria, setCategoria] = useState<Categoria>({nome: ''});

    useEffect(()=>{
        if(params.categoriaPassada){
            setCategoria(JSON.parse(params.categoriaPassada as string))
            
        }
    },[]);


    const handleSalvar = async () =>{
        if(categoria.nome?.length === 0){
            alert("Nome é obrigatorio");
            return;
        }
        try{
            const resposta =  await CategoriaService.save(categoria);
            if(resposta){
                alert("Sucesso!")
            }else{
                alert("Erro")
            }
            router.replace('/cadastros/categorias');            
        }catch(error: any){
            alert(error.message)
        }
    }

    return (
        <SafeAreaView className="h-full bg-white">
            <Header nome= "Cadastrar/Editar Categoria" voltar={true} />
            <View className="m-6">
                <View className="flex-row items-center bg-gray-200 rounded-3xl"> 
                    <Text className="font-semibold text-xl m-5">Nome:</Text>
                    <TextInput 
                        placeholder="Digite o nome da categoria" 
                        value={categoria?.nome} 
                        onChangeText = { texto => setCategoria({...categoria, nome: texto})}
                        className="text-xl" 
                    />
                </View>
                <View className="flex-row mt-8 justify-between">
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
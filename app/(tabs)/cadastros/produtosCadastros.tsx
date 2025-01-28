import { Button, Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import { Header } from "../../../components/Header";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Categoria } from "../../../types/categoria";
import { CategoriaService } from "../../../services/categoriaService";
import { Picker } from "@react-native-picker/picker";
import { ProdutoService } from "../../../services/produtoService";
import { Produto } from "../../../types/produtos";


export default function Screen(){

    const [produto, setProduto] = useState<Produto>({nome:'', precoVenda:0, categoria: {nome:null}});

    const handleSalvar = async () =>{
        try{
            const resposta =  await ProdutoService.save(produto);
            if(resposta){
                alert("Cadastro realizado ")
            }else{
                alert("Erro")
            }
            router.replace('/cadastros/produtos');        
        }catch(erro){
            console.log("Erro ao cadastrar: " + erro)
        }
    }

    //buscar categorias
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const listaCategorias = async () => {
        try{
            const lista = await CategoriaService.getAll();  
            setCategorias(lista);      
        }catch(error){
            return 0;
        }
    }

    useEffect( () =>{
        listaCategorias();
    }, []);
    

    return (
        <SafeAreaView className="h-full bg-white">
            <Header nome="Cadastrar Produtos" voltar={true} />
            <View className="m-6">
                <View className="flex-row items-center bg-gray-200 rounded-3xl mb-4"> 
                    <Text className="font-semibold text-xl m-5">Nome:</Text>
                    <TextInput 
                        value={produto?.nome}
                        onChangeText={texto => setProduto({...produto, nome: texto})}
                        placeholder="Digite o nome do produto"
                        className="text-xl" 
                    />
                </View>
                <View className="flex-row items-center bg-gray-200 rounded-3xl mb-4"> 
                    <Text className="font-semibold text-xl m-5">Preço:</Text>
                    <TextInput 
                        keyboardType="numeric"
                        value={produto.precoVenda ? produto.precoVenda.toString() : ''} 
                        onChangeText = { texto => setProduto({...produto, precoVenda: parseFloat(texto.replace(",","."))})}
                        placeholder="Digite o preco do produto"
                        className="text-xl" 
                    />
                </View>
                <View className="rounded-3xl mb-4 bg-gray-200 h-16"> 
                    <Picker
                        selectedValue={produto.categoria?.id}
                        onValueChange={(itemValue) => 
                            setProduto({...produto, categoria: {id: itemValue, nome: null}})
                        }
                    >
                        <Picker.Item label="Selecione uma categoria" value=""/>
                        {categorias.map((cat) =>(
                            <Picker.Item key={cat.id} label={cat.nome} value={cat.id}/>
                        ))}
                    </Picker>
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
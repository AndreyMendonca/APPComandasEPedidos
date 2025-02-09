import { Pressable, Text, TextInput, View } from "react-native"
import Icon from '@expo/vector-icons/FontAwesome6';
import { router } from "expo-router";
import { useState } from "react";


type Props = {
    rota: string;
    busca: (nome: string) => void;
    todos : () => void;
}


export const BuscaECadastro = ({rota, busca, todos} : Props) =>{

    const [nome, setNome] = useState<string>("");
    const [procurar, setProcurar] = useState(true);
    const [procurando, setProcurando] = useState(false);

    const handleProcurar = () =>{
        setProcurar(false)
        setProcurando(true);
        busca(nome);
    }

    const handleCancelar = () =>{
        setNome("");
        setProcurar(true);
        setProcurando(false);
        todos();
    }
    
    const handleCadastro = () =>{
        router.push(rota)
    }

    return (
        <View className="border-2 border-solid m-3 rounded-xl flex-row justify-between items-center p-2">
            <View>
                <TextInput 
                    value={nome}
                    onChangeText={ texto => setNome(texto) }
                    placeholder="Procurar..." 
                    className="border-2 rounded-xl p-3 w-60"    
                />
            </View>
            {
                procurar &&
                <Pressable onPress={handleProcurar} className="items-center mr-4">
                    <Icon name="magnifying-glass" size={20} color="black"/>
                    <Text>Procurar</Text>
                </Pressable>
            }
            {
                procurando &&
                <Pressable onPress={handleCancelar} className="items-center mr-4">
                    <Icon name="rectangle-xmark" size={20} color="red"/>
                    <Text className="color-red-700">Cancelar</Text>
                </Pressable>
            }

            <Pressable onPress={handleCadastro} className="items-center mr-4">
                <Icon name="square-plus" size={20} color="green"/>
                <Text className="color-green-800">Criar</Text>
            </Pressable>
        </View>
    )
}
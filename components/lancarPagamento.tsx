import { useState } from "react"
import { Pressable, Text, TextInput, View } from "react-native"
import { Picker } from "@react-native-picker/picker";
import { ComandaService } from "../services/comandaService";
import { router, useLocalSearchParams } from "expo-router";
import { pagamentoDTO } from "../types/comanda";

export const LancarPagamento = () =>{
    const {id} = useLocalSearchParams();
    const [form, setForm] = useState(false)
    const [tipoPagamento, setTipoPagamento] = useState(1);
    const [pagamento, setPagamento] = useState<pagamentoDTO>({formaDePagamento: 1, valorPago: 0});

    const handleVisible = () =>{
        setForm(true)
    }
    const handleInvisible = () =>{
        setForm(false)
    }

    const handlePagamento = async () =>{
        try{
            const response = await ComandaService.adicionarPagamento(id.toString(), pagamento); 
            setForm(false)
            router.replace(`comanda/fechamento/${id}`);
        }catch(error: any){
            alert(error.message)
        }
    }

    return(
        <View className="bg-gray-200 rounded-3xl m-2 p-2">
            <View className="items-center justify-center m-2">
                <Pressable onPress={handleVisible} className="bg-yellow-400 rounded-lg w-64 items-center justify-center">
                    <Text className="font-semibold text-xl">Adicionar Pagamento</Text>
                </Pressable>
            </View>

            {
                form &&
                <View className="border-2 rounded-xl"> 

                    <View className="flex-row justify-between m-2">
                        <TextInput 
                            value= {pagamento.valorPago ? pagamento.valorPago.toString() : '' }
                            onChangeText= { texto => setPagamento({...pagamento, valorPago: parseFloat(texto)})}
                            placeholder="adicione o valor"
                            className="bg-white w-52 h-12 rounded-xl"
                            keyboardType="numeric"
                        />
                        <View className="bg-white w-52 h-12 rounded-xl">
                            <Picker
                                selectedValue={tipoPagamento}
                                onValueChange={(item) => setPagamento({ ...pagamento, formaDePagamento: item })}
                            >
                                <Picker.Item label="Dinheiro" value={1}/>
                                <Picker.Item label="Pix" value={2}/>
                                <Picker.Item label="Cartão de Crédito" value={3}/>
                                <Picker.Item label="Cartão de Débito" value={4}/>
                            </Picker>
                        </View>

                    </View>

                    <View className="flex-row justify-center m-2">
                        <Pressable onPress={handleInvisible} className="bg-red-500 mr-5 h-10 items-center justify-center p-2">
                            <Text>Cancelar</Text>
                        </Pressable>
                        <Pressable onPress={handlePagamento} className="bg-green-700 mr-5 h-10 items-center justify-center p-2">
                            <Text>Pagar</Text>
                        </Pressable>
                    </View>
                </View>

            }
        </View>
    )
}
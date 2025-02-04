import { useState } from "react"
import { Pressable, Text, TextInput, View } from "react-native"
import { Picker } from "@react-native-picker/picker";

export const LancarPagamento = () =>{
    const [form, setForm] = useState(false)
    const [pagamento, setPagamento] = useState();

    const handleVisible = () =>{
        setForm(true)
    }
    const handleInvisible = () =>{
        setForm(false)
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
                            placeholder="adicione o valor"
                            className="bg-white w-52 h-12 rounded-xl"
                            keyboardType="numeric"
                        />
                        <View className="bg-white w-52 h-12 rounded-xl">
                            <Picker
                                selectedValue={pagamento}
                                onValueChange={(item) => setPagamento(item)}
                                
                            >
                                <Picker.Item label="Dinheiro" value={1}/>
                                <Picker.Item label="Pix" value={1}/>
                                <Picker.Item label="Cartão de Crédito" value={1}/>
                                <Picker.Item label="Cartão de Débito" value={1}/>
                            </Picker>
                        </View>

                    </View>

                    <View className="flex-row justify-center m-2">
                        <Pressable onPress={handleInvisible} className="bg-red-500 mr-5 h-10 items-center justify-center p-2">
                            <Text>Cancelar</Text>
                        </Pressable>
                        <Pressable className="bg-green-700 mr-5 h-10 items-center justify-center p-2">
                            <Text>Pagar</Text>
                        </Pressable>
                    </View>
                </View>

            }
        </View>
    )
}
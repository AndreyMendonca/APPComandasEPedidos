import { useState } from "react"
import { Pressable, Text, TextInput, View } from "react-native"
import { Picker } from "@react-native-picker/picker";

export const LancarPagamento = () =>{
    const [form, setForm] = useState(false)

    const handleVisible = () =>{
        setForm(true)
    }
    const handleInvisible = () =>{
        setForm(false)
    }

    return(
        <View className="flex-1 bg-gray-200 rounded-3xl p-2">
            <View className="items-center justify-center m-2">
                <Pressable onPress={handleVisible} className="bg-white rounded-lg w-64 items-center justify-center">
                    <Text className="font-semibold text-xl">Adicionar Pagamento</Text>
                </Pressable>
            </View>

            {
                form &&
                <View className="border-2"> 

                    <View className="flex-row justify-between m-2">
                        <TextInput 
                            value=""
                            placeholder="adicione o valor"
                            className="bg-white w-52"
                            keyboardType="numeric"
                        />
                        <Picker>
                            <Picker.Item label="oi" value={""}/>
                        </Picker>
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
import { Pressable, Text, View } from "react-native"
import Icon from '@expo/vector-icons/FontAwesome6';

export const OpcaoCategoria = () =>{
    return (
        <View className="bg-gray-200 m-3 p-4 rounded-xl flex-row justify-between items-center">
            <View>
                <Text className="font-semibold text-xl">Espeto</Text>
            </View>
            <View className="flex-row">
                <Pressable className="items-center mr-4">
                    <Icon name="pen-to-square"  size={20} color="black"  />
                    <Text> Editar </Text>
                </Pressable>
                <Pressable className="items-center">
                    <Icon name="trash-can"  size={20} color="red"  />
                    <Text className="color-red-600"> Excluir </Text>
                </Pressable>
            </View>
        </View>
    )
}
import { Pressable, Text, View } from "react-native"
import { Categoria } from "../types/categoria"


type Props = {
    data : Categoria
}

export const OpcaoCategoriaVenda = () =>{
    return (
        <Pressable className="w-36 rounded-xl bg-gray-300 items-center justify-center mr-2">
                <Text className="font-semibold">Espetos</Text>
        </Pressable>
    )
}
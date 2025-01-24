import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Screen(){

    const handleClick = () =>{
        router.replace('/home')
    }

    return (
        <View>
            <Text className="text-red-500">Ola</Text>
            <Button title="acessar sistema" onPress={handleClick}/>
        </View>
    )
}
import { Stack } from "expo-router";

export default function VendasLayout(){
    return(
        <Stack>
            <Stack.Screen name="opcaoDeVenda" 
                options={{headerShown: false}}
            />
            <Stack.Screen name="comandas" 
                options={{headerShown: false}}
            />
            <Stack.Screen name="mesas" 
                options={{headerShown: false}}
            />
        </Stack>
    )
}
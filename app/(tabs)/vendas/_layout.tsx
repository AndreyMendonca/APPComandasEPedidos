import { Stack } from "expo-router";

export default function VendasLayout(){
    return(
        <Stack>
            <Stack.Screen name="comandas" 
                options={{headerShown: false}}
            />
            <Stack.Screen name="aberturaComanda" 
                options={{headerShown: false}}
            />
        </Stack>
    )
}
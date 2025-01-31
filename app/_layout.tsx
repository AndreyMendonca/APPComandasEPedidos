import { Stack } from "expo-router";
import "../global.css";

export default function ScreenRoot(){
    return(
        <Stack>
            <Stack.Screen
                name="index"
            />
            <Stack.Screen 
                name="(tabs)"
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="comanda/[id]"
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="comanda/fechamento/[id]"
                options={{
                    headerShown: false
                }}
            />
        </Stack>
    )
}
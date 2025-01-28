import { Stack } from "expo-router";

export default function CategoriasLayout(){
    return(
        <Stack>
            <Stack.Screen name="listaDeCadastros" 
                options={{headerShown: false}}
            />
            <Stack.Screen name="categorias"
                options={{headerShown: false}}
            />
            <Stack.Screen name="categoriasCadastro"
                options={{headerShown: false}}
            />
            <Stack.Screen name="produtos"
                options={{headerShown: false}}
            />
            <Stack.Screen name="produtosCadastros"
                options={{headerShown: false}}
            />
            <Stack.Screen name="adicionais"
                options={{headerShown: false}}
            />
            <Stack.Screen name="complementos"
                options={{ headerShown: false}}
            />
        </Stack>
    )
}
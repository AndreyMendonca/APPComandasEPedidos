import { Stack } from "expo-router";

export default function CategoriasLayout(){
    return(
        <Stack>
            <Stack.Screen name="listaDeCadastros" 
                options={{title:"Cadastros", headerShown: false}}
            />
            <Stack.Screen name="categorias"
                options={{title:"Categorias", headerShown: false}}
            />
            <Stack.Screen name="categoriasCadastro"
                options={{headerShown: false}}
            />
            <Stack.Screen name="produtos"
                options={{title:"Produtos", headerShown: false}}
            />
            <Stack.Screen name="produtosCadastros"
                options={{headerShown: false}}
            />
            <Stack.Screen name="adicionais"
                options={{title:"Adicionais", headerShown: false}}
            />
            <Stack.Screen name="complementos"
                options={{title:"Complementos", headerShown: false}}
            />
        </Stack>
    )
}
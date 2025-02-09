import { ScrollView, Text, View } from "react-native";
import { Header } from "../../../components/Header";
import { OpcaoDeCadastro } from "../../../components/OpcaoCadastros";

export default function Screen(){
    return (
        <View className="h-screen bg-white">
            <Header nome="Cadastros"/>
            <ScrollView> 
                <View className="flex-row justify-between px-4 mt-4">
                    <OpcaoDeCadastro 
                        identificacao="Categorias" 
                        icone="layer-group"
                        rota="/cadastros/categorias"
                    />
                    <OpcaoDeCadastro 
                        identificacao="Produtos" 
                        icone="burger"
                        rota="/cadastros/produtos"
                    />
                </View> 
                <View className="flex-row justify-between px-4 mt-4">
                    <OpcaoDeCadastro 
                        identificacao="Adicionais"  
                        icone="square-plus"
                        rota="/cadastros/adicionais"
                    />
                    <OpcaoDeCadastro 
                        identificacao="Complementos" 
                        icone="rectangle-list"
                        rota="/cadastros/complementos"
                    />
                </View> 
            </ScrollView>
        </View>
    )
}
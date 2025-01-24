import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function TabLayout(){
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    title: "Inicio",
                    tabBarIcon:({color}) => <FontAwesome 
                        size={28}  
                        name="home"
                        color={color}
                    />,
                    headerShown: false
                }}
            />
        </Tabs>
    )
}
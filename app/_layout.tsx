import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function RootLayout(){

    return(
        <GestureHandlerRootView>
            <Drawer>
                <Drawer.Screen 
                    name="index"
                    options={{drawerLabel:'Inicio', headerTitle:'Home'}}
                />
            </Drawer>
            
        </GestureHandlerRootView>
    )
}
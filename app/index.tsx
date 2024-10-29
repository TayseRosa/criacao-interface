import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Screen(){    
    const { colorScheme, setColorScheme } = useColorScheme();

    return(
        <View style={styles.container} className="h-min-screen bg-slate-200 dark:bg-black">
            <Stack.Screen options={{
                title:'Início',
                headerRight:()=><Button title="Add" />
            }} />


            <Text className="text-3xl text-black dark:text-white"> Titulo </Text>
            <Text className="text-xl text-black dark:text-white"> Scheme: { colorScheme } </Text>

            <Button title="Dark" onPress={()=>setColorScheme('dark')} />
            <Button title="Light" onPress={()=>setColorScheme('light')} />
            <Button title="System" onPress={()=>setColorScheme('system')} />

            <TextInput className="h-11 bg-red-300" />
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    button:{
        width:200,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#643a3a',
        borderRadius:6
    },
    button2:{
        width:200,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#661b1b',
        borderRadius:6
    }
})
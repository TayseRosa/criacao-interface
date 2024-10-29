import { Link, router, Stack, useLocalSearchParams } from "expo-router";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function Screen(){    

    const handleClick = () => {
        router.navigate('/about')
    }

    const handleAddButtonRight = () => {
        alert('Adicionado com sucesso')
    }

    return(
        <View style={styles.container}>
            <Stack.Screen options={{
                title:'Início',
                headerRight:()=><Button title="Add" onPress={handleAddButtonRight} />
            }} />
            <Text>Tela inicial</Text>

            <Link href='/about' asChild>
                <Pressable onPress={handleClick} style={styles.button}>
                    <Text>
                        Ir para SOBRE
                    </Text>
                </Pressable>
            </Link>

            <Link href='/termos' asChild>
                <Pressable onPress={handleClick} style={styles.button2}>
                    <Text>
                        Página termos de uso
                    </Text>
                </Pressable>
            </Link>

            <Link href='/profile/1' style={styles.button}>
                Perfil 1
            </Link>

            <Link href='/profile/2' style={styles.button2}>
                Perfil 2
            </Link>

            <Link href='/auth/login' asChild>
                <Pressable onPress={handleClick} style={styles.button}>
                    <Text>
                        Página login
                    </Text>
                </Pressable>
            </Link>
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
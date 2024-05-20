import React from "react";
import { View,Text,StyleSheet } from "react-native";
//crear el componente
const FrasesContenedor = ({Frase}) => {
    return (
       <View style ={styles.container}>
           <Text style = {styles.text}>{Frase}</Text>
       </View>
    )
}
//exportar el componente
//exportart el componente
//styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
export default FrasesContenedor;


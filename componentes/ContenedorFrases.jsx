import React from "react";
import { View,Text,StyleSheet } from "react-native";
//crear el componente
const FrasesContenedor = ({Frase}) => {
    return (
       <View>
           <Text>{Frase}</Text>
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
});
export default FrasesContenedor;

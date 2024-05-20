import React from "react";
import { View,Text,StyleSheet } from "react-native";
//crear el componente
const FrasesContenedor = ({Frase}) => {
    return (
<<<<<<< HEAD
       <View style ={styles.container}>
           <Text style = {styles.text}>{Frase}</Text>
=======
       <View>
           <Text>{Frase}</Text>
>>>>>>> a9a7bbc2c780f06b98862365c1afa1be80c99480
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
<<<<<<< HEAD
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
export default FrasesContenedor;

=======
});
export default FrasesContenedor;
>>>>>>> a9a7bbc2c780f06b98862365c1afa1be80c99480

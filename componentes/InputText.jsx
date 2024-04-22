import React from "react";
import { StyleSheet, TextInput } from "react-native";

const InputText = (props) => {
  return (
    <TextInput
      style={styles.input}
      {...props} // Esto permite pasar propiedades adicionales como 'placeholder', 'value', etc.
    />
  );
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      width: 300,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginTop: 30,
      marginBottom: 5,
      fontSize: 16, // Tamaño del texto dentro del campo de entrada

    },
  });

  export default InputText;
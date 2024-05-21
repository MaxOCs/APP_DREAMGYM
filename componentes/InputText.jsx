import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import colors from "../styles/colores";

const InputText = ({ placeholder, value, onChangeText, secureTextEntry, style }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.TextoTitulo}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={[styles.input, style]} // Combinamos los estilos proporcionados con los estilos predeterminados
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
    width: '70%',
  },
  input: {
    height: 50,
    backgroundColor: colors.FondoClaro,
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 18,
    color: colors.TextoTitulo,
    borderWidth: 1,
    borderColor: colors.NegroTitulo, // Color del borde
  },
});

export default InputText;

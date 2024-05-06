import React, { useState } from "react";
import axios from "axios";
import BotonPrincipal from "../componentes/botonPrincipal";
import InputText from "../componentes/InputText";
import { Text, View, StyleSheet } from "react-native";
import colors from "../styles/colores";

const HomeScreen = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');

  

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.Primaryblue, fontSize: 36 }}>GYMAPP</Text>
      <InputText
        placeholder="Usuario"
        value={nombre}
        onChangeText={setNombre}
      />
      <InputText
        placeholder="Contraseña"
        secureTextEntry
        value={contraseña}
        onChangeText={setContraseña}
      />
      <Text
        onPress={() => navigation.navigate("Registro")}
        style={{ color: colors.Primaryblue, fontSize: 17 }}
      >
        Registrarme
      </Text>
      <BotonPrincipal onPress={() => navigation.navigate("Principal")} title="Iniciar sesión" />
      {error && <Text>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
});

export default HomeScreen;

import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import BotonPrincipal from "../componentes/botonPrincipal";
import InputText from "../componentes/InputText";
import colors from "../styles/colores";
import webservice from "../webservice/rutaweb"
const HomeScreen = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');




  //LOGIN TOTALMENTE FUNCIONAL
  const handleLogin = async () => {
    const queryParams = new URLSearchParams({
      nombre,
      password,
    }).toString();


    const url = `${webservice}/login?${queryParams}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Valor de nombre antes de navegar:', nombre);
      if (response.ok) {
        navigation.navigate('Principal', { nombre: nombre }); // Pasar nombre como parámetro
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Error en el registro');
      }
    } catch (error) {
      console.error('Error de red:', error.message);
      setError('Error de red');
    }
  };

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
        value={password}
        onChangeText={setPassword}
      />
      <Text
        onPress={() => navigation.navigate("Registro", {nombre})}
        style={{ color: colors.Primaryblue, fontSize: 17 }}
      >
        Registrarme
      </Text>
      <BotonPrincipal onPress={handleLogin} title="Iniciar sesión" />
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

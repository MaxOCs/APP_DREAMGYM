import React, { useState } from "react";
import PushNotification from "react-native-push-notification";//esto es de noti
import moment from "moment";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import BotonPrincipal from "../componentes/botonPrincipal";
import InputText from "../componentes/InputText";
import colors from "../styles/colores";
import webservice from "../webservice/rutaweb";



const HomeScreen = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


 
  


  // Método para manejar la navegación entre pantallas con parámetros
  const handleNavigation = (screenName, params = {}) => {
    navigation.navigate(screenName, params);
  };

  // Función para manejar el inicio de sesión
  const handleLogin = async () => {
    const queryParams = new URLSearchParams({ nombre, password }).toString();
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
        handleNavigation('Principal', { prueba: "josue" }); // Navegar a 'Principal' con el parámetro prueba
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
      <TouchableOpacity onPress={() => handleNavigation("Registro")} style={{ marginBottom: 20 }}>
        <Text style={{ color: colors.Primaryblue, fontSize: 17 }}>Registrarme</Text>
      </TouchableOpacity>
      <BotonPrincipal onPress={() => navigation.navigate('Principal', { prueba: "josue" })} title="Iniciar sesión" />
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

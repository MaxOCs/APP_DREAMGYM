import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState,useEffect } from "react";
import BotonPrincipal from "../componentes/botonPrincipal";
import InputText from "../componentes/InputText";
import colors from "../styles/colores";
import webservice from "../webservice/rutaweb";
import { Image } from "@rneui/themed";

const HomeScreen = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // pa limpiar los inputs
  useEffect(() => {
    const limpiar = navigation.addListener('focus', () => {
      setNombre('');
      setPassword('');
      setError('');
    });

    return limpiar;
  }, [navigation]);

  //Funcion login sin backend (No borrar!!!! vete alv joto me sirve para saltarme el login)
  const handleLogin = () => {
    console.log('Nombre de usuario:', nombre); // Verifica el valor de nombre
    if (nombre === '') {
      setError('Por favor, ingresa un nombre de usuario');
      return;
    }
    navigation.navigate('Principal', {screen: 'Inicio',params:{nombreUsuario:nombre}});
  };

  //Funcion para navegar a LottieAnimatios
    const handleLottie = () => {
      navigation.navigate('LottieAnimations',{nombreUsuario:nombre});
    }

    // Método para manejar la navegación entre pantallas con parámetros
    const handleNavigation = (screenName, params = {}) => {
      navigation.navigate(screenName, params);
    };
  
    // Función para manejar el inicio de sesión (Josue implentalo con el diseño actual)
    const handleLogin2 = async () => {
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
          handleLottie() //enviar el nombre del Usuario 
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
      <Image source={require('../src/Logo.png')} style={{ width: 200, height: 200 }} />
      <Text style={{ color: colors.Primaryblue, fontSize: 36, fontWeight: 'bold', }}>GymDream</Text>
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
        onPress={() => navigation.navigate("Registro")}
        style={{ color: colors.Primaryblue, fontSize: 17 }}
      >
        Registrarme
      </Text>
      <BotonPrincipal 
        onPress={handleLogin2} // aqui se debe llamar el incio de sesion 
        title="Iniciar sesión"  
      />
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;

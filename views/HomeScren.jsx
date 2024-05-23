import React, { useState,useEffect } from "react";
import BotonPrincipal from "../componentes/botonPrincipal";
import InputText from "../componentes/InputText";
import { Text, View, StyleSheet } from "react-native";
import colors from "../styles/colores";
import { Screen } from "react-native-screens";

const HomeScreen = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');

  //Funcion login sin backend (No borrar!!!! me sirve para saltarme el login)
  const handleLogin = () => {
    console.log('Nombre de usuario:', nombre); // Verifica el valor de nombre
    if (nombre === '') {
      setError('Por favor, ingresa un nombre de usuario');
      return;
    }
    navigation.navigate('Principal', {screen: 'Inicio',params:{nombreUsuario:nombre}});
  };

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
          handleNavigation('Principal', { screen: 'Inicio',params:{nombreUsuario:nombre}}); //enviar el nombre del Usuario 
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
        value={contraseña}
        onChangeText={setContraseña}
      />
      <Text
        onPress={() => navigation.navigate("Registro")}
        style={{ color: colors.Primaryblue, fontSize: 17 }}
      >
        Registrarme
      </Text>
      <BotonPrincipal 
        onPress={handleLogin} // aqui se debe llamar el incio de sesion 
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

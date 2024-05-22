import React, { useState } from "react";
import BotonPrincipal from "../componentes/botonPrincipal";
import InputText from "../componentes/InputText";
import { Text, View, StyleSheet } from "react-native";
import colors from "../styles/colores";
import { Screen } from "react-native-screens";

const HomeScreen = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');

  
  const handleLogin = () => {
    console.log('Nombre de usuario:', nombre); // Verifica el valor de nombre
    if (nombre === '') {
      setError('Por favor, ingresa un nombre de usuario');
      return;
    }
    navigation.navigate('Principal', {screen: 'Inicio',params:{nombreUsuario:nombre}});
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
        onPress={handleLogin} 
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

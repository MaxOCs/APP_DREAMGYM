import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';
import axios from 'axios';
import webservice from '../webservice/rutaweb'
import BotonPrincipal from '../componentes/botonPrincipal';
import colors from '../styles/colores';

const Registro = ({ navigation }) => {


  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');




  const handleRegistro = async () => {
    if (!nombre || !password) {
      setError('Falta campos por completar');
      return;
    }
  
    const datos = new URLSearchParams({
      nombre,
      password,
    }).toString();
  
    const url = `${webservice}/registro?${datos}`;
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        navigation.navigate('Bienvenido');
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
      <Text style={styles.texto}>Nombre</Text>
      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
      />
      <Text style={styles.texto}>Contraseña</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={password}
        onChangeText={setPassword}
      />
      
      <BotonPrincipal onPress={handleRegistro} title="Registrarme" />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
    borderRadius: 3,
    backgroundColor: colors.TextoTitulo,
  },
  texto: {
    margin: 12,
    padding: 2,
    fontSize: 18,
    color: colors.NegroTitulo,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Registro;

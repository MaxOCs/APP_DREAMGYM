import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import BotonPrincipal from '../componentes/botonPrincipal';
import axios from 'axios';
import webservice from '../webservice/rutaweb';
import Toast from 'react-native-toast-message';

const CambioFisico = ({ navigation, route }) => {
  const { nombreUsuario } = route.params;
  const { fotosTomadas } = route.params;

  const { fotoUri } = route.params; // Asegurarse de recibir correctamente el parámetro fotoUri
  const [userIngresado, setUserIngresado] = useState(null); // Inicializar con null
  const [error, setError] = useState('');
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`${webservice}/userIngresado/${nombreUsuario}`);
        setUserIngresado(response.data.usuario);
      } catch (error) {
      }
    };
    getUser();
  }, [nombreUsuario]);

  

  const handleRegistroTransformacion = async () => {
    if (!userIngresado || !fotoUri) {
      setError('Aún no se ha obtenido el ID de usuario o la foto');
      return;
    }

    const datos = new URLSearchParams({
      usuarioF: userIngresado,
      foto: encodeURIComponent(fotoUri),
    }).toString();

    const url = `${webservice}/transformacion?${datos}`;

    console.log('Datos para el registro:', datos);

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        console.log("Registro exitoso");
        Toast.show({
          type: 'success',
          text1: 'Foto guardada',
        });
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Error en el registro');
      }
    } catch (error) {
      console.error('Error de red:', error.message);
      setError('Error de red');
    }
  };

  const handleCamara = () => {
    navigation.navigate('CamaraFisico'); // Navegar a la pantalla de la cámara correctamente
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tu cambio físico</Text>
      <Text style={styles.descripcion}>A lo largo del tiempo</Text>
      <Text style={styles.descripcion2} onPress={() => navigation.navigate("HistorialCambioFisico", {fotosTomadas:fotosTomadas})}>Ver mi historial</Text>
      <BotonPrincipal onPress={handleCamara} title="Tomar nueva foto" />
      <BotonPrincipal onPress={handleRegistroTransformacion} title="Guardar transformación" />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 20,
  },
  descripcion:
  {
    fontSize: 18,
    color: '#6c757d',
    textAlign: 'center',
    
  },
  descripcion2:
  {
    fontSize: 20,
    color: '#6c757d',
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default CambioFisico;

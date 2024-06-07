import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl, ActivityIndicator } from 'react-native';
import axios from 'axios';
import webservice from '../webservice/rutaweb';

const HistorialIMC = ({ route }) => {
  const { nombreUsuario } = route.params;
  const [userIngresado, setUserIngresado] = useState(0);
  const [historialIMC, setHistorialIMC] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Función para obtener el ID de usuario
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`${webservice}/userIngresado/${nombreUsuario}`);
        setUserIngresado(response.data.usuario);
      } catch (error) {
        console.error('Error al obtener el ID de usuario:', error);
        setError('Error al obtener el ID de usuario');
      }
    };
    getUser();
  }, [nombreUsuario]);

  // Función para obtener el historial de IMC
  useEffect(() => {
    const obtenerHistorialIMC = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${webservice}/HistorialIMC/${userIngresado}`);
        console.log('Historial de IMC:', response.data.historialIMC);
        setHistorialIMC(response.data.historialIMC);
      } catch (error) {
        console.error('Error al obtener historial de IMC:', error);
        setError('Error al obtener historial de IMC');
      } finally {
        setLoading(false);
      }
    };
    // Obtener el historial de IMC solo si userIngresado es válido
    if (userIngresado !== 0) {
      obtenerHistorialIMC();
    }
  }, [userIngresado]);

  // Función para manejar el refresco manual
  const onRefresh = () => {
    obtenerHistorialIMC();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de IMC</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : historialIMC.length > 0 ? (
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
          refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}
        >
          {historialIMC.map((item, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.itemText}>Altura: {item.altura}</Text>
              <Text style={styles.itemText}>Peso: {item.peso}</Text>
              <Text style={styles.itemText}>IMC: {item.imc}</Text>
              <Text style={styles.itemText}>Fecha: {item.created_at}</Text>

            </View>
          ))}
        </ScrollView>
      ) : (
        <Text>No hay historial de IMC disponible</Text>
      )}
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scrollView: {
    width: '100%',
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  item: {
    marginBottom: 30,
    padding: 5,
    backgroundColor: '#5C84FF',
    borderRadius: 4,
    width: '90%',
  },
  itemText: {
    fontSize: 20,
    marginBottom: 5,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default HistorialIMC;

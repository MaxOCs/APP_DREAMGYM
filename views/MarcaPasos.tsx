import React, { useEffect, useState } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import RingProgress from '../componentes/ProgresoPasos';
import {
  initialize,
  requestPermission,
  readRecords,
} from 'react-native-health-connect';

const STEPS_GOAL = 10_000;

const MarcaPasos:React.FC<{ route: any; navigation: any }>  = ({ route, navigation }) => {
  const [steps, setSteps] = useState(0);
  const [distance, setDistance] = useState(0);

  const initializeClient = async (): Promise<boolean> => {
    try {
      const isInitialized = await initialize();
      if (!isInitialized) {
        Alert.alert('Error', 'No se pudo inicializar el cliente');
        return false;
      }
      return true;
    } catch (error) {
      console.error('Error al inicializar el cliente:', error);
      Alert.alert('Error', 'Ocurrió un error al inicializar el cliente');
      return false;
    }
  };

  const requestPermissions = async (): Promise<boolean> => {
    try {
      const grantedPermissions = await requestPermission([
        { accessType: 'read', recordType: 'Steps' },
        { accessType: 'read', recordType: 'Distance' },
      ]);
      if (!grantedPermissions) {
        Alert.alert('Permiso denegado', 'No se otorgaron los permisos necesarios');
        return false;
      }
      return true;
    } catch (error) {
      console.error('Error al solicitar permisos:', error);
      Alert.alert('Error', 'Ocurrió un error al solicitar permisos');
      return false;
    }
  };

  const readSampleData = async (): Promise<void> => {
    const isInitialized = await initializeClient();
    if (!isInitialized) return;

    const permissionsGranted = await requestPermissions();
    if (!permissionsGranted) return;

    try {
      const stepsResult = await readRecords('Steps', {
        timeRangeFilter: {
          operator: 'between',
          startTime: '2023-01-09T00:00:00.000Z',
          endTime: '2024-06-02T23:59:59.999Z',
        },
      });

      const distanceResult = await readRecords('Distance', {
        timeRangeFilter: {
          operator: 'between',
          startTime: '2023-01-09T00:00:00.000Z',
          endTime: '2024-06-02T23:59:59.999Z',
        },
      });

      const totalSteps = stepsResult.reduce((sum, record) => sum + record.count, 0);
      const totalDistance = distanceResult.reduce((sum, record) => record.distance.inMeters, 0);

      setSteps(totalSteps);
      setDistance(totalDistance / 1000); // Convert to kilometers if distance is in meters
    } catch (error) {
      console.error('Error al leer los registros:', error);
      Alert.alert('Error', 'Ocurrió un error al leer los registros');
    }
  };

  useEffect(() => {
    readSampleData();
  }, []);

  return (
    <View style={styles.container}>
      <RingProgress
        radius={100}
        strokeWidth={25}
        progress={steps / STEPS_GOAL}
      />
      <View style={styles.textoYBotonContainer}>
        <Text style={styles.titulo}>{distance.toFixed(2)} KM</Text>
        <Text style={styles.titulo}>{steps} PASOS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoYBotonContainer: {
    marginTop: 60,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  tamañoBoton: {
    width: 350, // Ancho del botón
    height: 63, // Alto del botón
  }
});

export default MarcaPasos;

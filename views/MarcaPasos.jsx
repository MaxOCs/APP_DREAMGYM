// PedometerCounter.js
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Pedometer from 'react-native-pedometer';

const PedometerCounter = () => {
  const [stepCount, setStepCount] = useState(0);
  const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');

  useEffect(() => {
    const startPedometer = async () => {
      const isAvailable = await Pedometer.isAvailableAsync();
      setIsPedometerAvailable(isAvailable ? 'available' : 'unavailable');

      if (isAvailable) {
        const subscription = Pedometer.watchStepCount(result => {
          setStepCount(result.steps);
        });

        return () => {
          subscription.remove();
        };
      }
    };

    startPedometer();
  }, []);

  if (isPedometerAvailable === 'checking') {
    return <Text>Comprobando disponibilidad del podómetro...</Text>;
  }

  if (isPedometerAvailable === 'unavailable') {
    return <Text>El podómetro no está disponible en este dispositivo.</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pasos: {stepCount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default PedometerCounter;

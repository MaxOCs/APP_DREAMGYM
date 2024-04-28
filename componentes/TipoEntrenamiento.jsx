import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const EntrenamientoTemplate = ({ title, question, onLevelSelect }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.question}>{question}</Text>

      {/* Opciones para seleccionar el nivel */}
      <View style={styles.levelOptions}>
        <TouchableOpacity
          style={styles.levelButton}
          onPress={() => onLevelSelect('Principiante')}
        >
          <Text style={styles.levelText}>Principiante</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.levelButton}
          onPress={() => onLevelSelect('Intermedio')}
        >
          <Text style={styles.levelText}>Intermedio</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.levelButton}
          onPress={() => onLevelSelect('Experto')}
        >
          <Text style={styles.levelText}>Experto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Color de fondo
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
  },
  levelOptions: {
    
    flexDirection: 'column', // Disposición horizontal
    justifyContent: 'center', // Centrar verticalmente
    alignItems: 'center', // Centrar horizontalmente
    gap: 15, // Espacio entre elementos
  },
  levelButton: {
    height: 50,
    width: 350,
    padding: 15,
    backgroundColor: '#e0e0e0', // Color de fondo para los botones
    borderRadius: 5,
  },
  levelText: {
    fontSize: 16, // Tamaño del texto
    color: 'black',
  },
});

export default EntrenamientoTemplate;

import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import ImagenesComponente from "../componentes/Imagenes";
import ContadorRegresivo from "../componentes/Timer";
import webservice from "../webservice/rutaweb";
import axios from 'axios';

const Ejercicio = ({ navigation }) => {
  const [ejercicios, setEjercicios] = useState([]);
  const [ejercicioActual, setEjercicioActual] = useState(0);
  const [habilitarSiguiente, setHabilitarSiguiente] = useState(false);
  
  const url = `${webservice}/getEjercicios`;

  useEffect(() => {
    const obtenerEjercicios = async () => {
      try {
        const response = await axios.get(url); 
        setEjercicios(response.data.ejercicio); 
      } catch (error) {
        console.error(error);
      }
    };

    obtenerEjercicios();
  }, []);

  const imagenesEjercicios = {
    'Press banca': 'https://blogscdn.thehut.net/app/uploads/sites/450/2016/03/shutterstock_336330497opt_hero_1620634941_1620820354.jpg',
    'Press inclinado': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkvXuzhhOYhVIOyoX_JCdf9aOQ6-Jtpob6g7mYIJgdJQ&s',
  };

  // Método para el siguiente ejercicio
  const manejarSiguienteEjercicio = () => {
    if (ejercicioActual < ejercicios.length - 1) {
      setEjercicioActual(ejercicioActual + 1);
      setHabilitarSiguiente(false);
    } else {
      console.log('No hay más ejercicios');
    }
  };

  // Manejar el fin del contador
  const manejarFinContador = () => {
    setHabilitarSiguiente(true);
  };

  if (ejercicios.length === 0) {
    return <Text>Cargando ejercicios...</Text>;
  }

  const ejercicio = ejercicios[ejercicioActual];
  const imagenUri = imagenesEjercicios[ejercicio.nombre] || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKcwz8jrcEBCZ8AMt_2xR8GgR-IfnsjW1_Jq7nhN3aw&s';

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImagenesComponente uri={imagenUri} style={styles.image} />
      </View>

      <Text style={styles.title}>{ejercicio.nombre}</Text>
      <Text style={styles.description}>{ejercicio.descripcion}</Text>

      <ContadorRegresivo tiempo={60} onFin={manejarFinContador} />

      <TouchableOpacity
        style={[styles.button, !habilitarSiguiente && styles.buttonDisabled]}
        onPress={manejarSiguienteEjercicio}
        disabled={!habilitarSiguiente}
      >
        <Text style={styles.buttonText}>Siguiente</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: '100%',
    height: '40%',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonDisabled: {
    backgroundColor: '#A5D6A7',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Ejercicio;

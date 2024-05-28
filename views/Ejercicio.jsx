import React, { useEffect, useState} from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import ImagenesGif from "../componentes/ImagenesGif";
import ContadorRegresivo from "../componentes/Timer";
import webservice from "../webservice/rutaweb";
import axios from 'axios';
import ImagenesComponente from '../componentes/ImagenesGif';

const Ejercicio = ({ navigation }) => {
  const [ejercicios, setEjercicios] = useState([]);
  const [ejercicioActual, setEjercicioActual] = useState(0);
  const [habilitarSiguiente, setHabilitarSiguiente] = useState(false);
  const [reiniciarContador, setReiniciarContador] = useState(false);

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
    'Press banca': 'https://cdn.hsnstore.com/blog/wp-content/uploads/2017/10/press-banca.gif',
    'Press inclinado': 'https://i.pinimg.com/originals/15/5c/3f/155c3fd369def67777217d621f900fa7.gif',
    'Curl de bicep': 'https://i.gifer.com/7hh1.gif',
    'Curl de martillo': 'https://64.media.tumblr.com/89d5dc0565c6c10cb7a2d24a0be9fa64/fc7d30136f3e6ce7-2e/s1280x1920/e1e8a5b4ac157420037acb8586bde4a5de7b25c5.gifv',
    'Laterales de hombro': 'https://rincondelmusculo.com/wp-content/uploads/2015/03/elevacion-lateral.gif',
    'Sentadilla': 'https://static.wixstatic.com/media/c94d75_4288a5e3777e486bb5a72bda248d9540~mv2.gif',

  };

  // Método para el siguiente ejercicio
  const manejarSiguienteEjercicio = () => {
    if (ejercicioActual < ejercicios.length - 1) {
      setEjercicioActual(ejercicioActual + 1);
      setHabilitarSiguiente(false);
      setReiniciarContador(true); // Activar reinicio del contador
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
  const imagenUri = imagenesEjercicios[ejercicio.nombre] || 'https://j.gifs.com/pZZQJV.gif';

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

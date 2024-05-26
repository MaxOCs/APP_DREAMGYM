
import React, { useEffect, useState } from "react";
import axios from 'axios';
import webservice from '../webservice/rutaweb';
import { Text, StyleSheet, View, Stack } from 'react-native';
import AvatarUser from "../componentes/CabezeraUser";
import SliderItem from "../componentes/Slider-Item";
import FrasesContenedor from "../componentes/ContenedorFrases";
import { Skeleton } from '@rneui/themed';

const Inicio = ({ navigation, route }) => {

  const { prueba } = route.params;
  const [frases, setFrases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingFoto, setLoadingFoto] = useState(true);
  const [error, setError] = useState(null);
  const [errorFoto, setErrorFoto] = useState(null);
  const [FotoPerfil, setFotoPerfil] = useState('');

  const nombreUsuario = route.params.nombreUsuario ? route.params.nombreUsuario : 'Usuario predetermido';

  console.log(prueba);
  const url = `${webservice}/frases`;
  const urlfotoPerfil = `${webservice}/foto/${nombreUsuario}`;;

  useEffect(() => {
    const fetchFrases = async () => {
      try {
        const response = await axios.get(url);
        setFrases(response.data.frases);
      } catch (error) {
        console.error(error);
        setError('Error al cargar las frases');
      } finally {
        setLoading(false);
      }
    };

    fetchFrases();
  }, []);

  useEffect(() => {
    const fetchFotoPerfil = async () => {
      try {
        const response = await axios.get(urlfotoPerfil);
        const fotoDecodificada = decodeURIComponent(response.data.foto); // Decodificar la URL de la foto
        setFotoPerfil(fotoDecodificada);
      } catch (error) {
        console.error(error);
        setErrorFoto('Error al cargar la foto');
      } finally {
        setLoadingFoto(false);
      }
    };
  
    fetchFotoPerfil();
  }, []);
  
  return (
    <View style={styles.container}>
      {/* Sección de Bienvenida */}
      {loadingFoto ? (
        <View style={styles.section}>
          <Skeleton animation="wave" width={400} height={50} />
        </View>
      ) : errorFoto ? (
        <View style={styles.section}>
            <Skeleton
              //LinearGradientComponent={LinearGradient}
              animation="wave"
              width='100%'
              height={50}
            />
            <Text>Error: {errorFoto}</Text>
        </View>
       
      ) : (
        <View style={styles.section}>
          <AvatarUser ImgenUrl={FotoPerfil} NameUsuario={nombreUsuario} />
        </View>
      )}

      {/* Sección de Frase */}
      {loading ? (
        <Text>Cargando frases...</Text>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : frases.length > 0 ? (
        frases.map((frase, index) => (
          <View key={index} style={styles.frases}>
            <FrasesContenedor Frase={frase.descripcion}></FrasesContenedor>
          </View>
        ))
      ) : (
        <Text>No hay frases disponibles</Text>
      )}

      {/* Sección de Categorías en forma horizontal */}
      <SliderItem navigation={navigation} />



    </View>


  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#1ADAFC',
  },
  section: {
    marginVertical: 20, // Espacio entre secciones
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  frases:{
    width: '100%',
    height: 200,
  },
  nameText: {
    fontSize: 18,
  },
  quoteText: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  categoryHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  horizontalCategories: {
    flexDirection: 'row', // Disposición horizontal
    justifyContent: 'space-between', // Espacio entre categorías
    alignItems: 'center', // Alineación vertical
  },
  categoryBlock: {
    backgroundColor: '#e0e0e0', // Color de fondo para el bloque
    width: 100, // Tamaño del cuadrado
    height: 100, // Tamaño del cuadrado
    justifyContent: 'center', // Centra el texto en el bloque
    alignItems: 'center', // Centra el texto en el bloque
    borderRadius: 10, // Bordes redondeados
    marginHorizontal: 10, // Espacio entre bloques
  },
});
export default Inicio;
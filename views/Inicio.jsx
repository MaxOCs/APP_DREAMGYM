import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View } from 'react-native';
import axios from 'axios';
import webservice from '../webservice/rutaweb';
import AvatarUser from "../componentes/CabezeraUser";
import SliderItem from "../componentes/Slider-Item";

const Inicio = ({ navigation, route }) => {



  //NO PASA EL NOMBRE QUIEN SABE XQ 
  useEffect(() => {
    console.log('Nombre recibido en useEffect:', nombre);
  }, [route.params]);
  
  const { nombre } = route.params|| {};
  console.log('Nombre recibido:', nombre); // Verifica si nombre se está pasando correctamente

  const [frases, setFrases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = `${webservice}/frases`;

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

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <AvatarUser ImgenUrl={"https://randomuser.me/api/portraits/men/36.jpg"} NameUsuario={nombre} />
      </View>

      <Text style={styles.quoteHeader}>Frases</Text>
      {loading ? (
        <Text>Cargando frases...</Text>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : frases.length > 0 ? (
        frases.map((frase, index) => (
          <View key={index} style={styles.quoteText}>
            <Text>{frase.descripcion}</Text>
          </View>
        ))
      ) : (
        <Text>No hay frases disponibles</Text>
      )}

      <SliderItem navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  section: {
    marginVertical: 20, // Espacio entre secciones
  },
  quoteContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  quoteHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  quoteText: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 5,
  },
});

export default Inicio;

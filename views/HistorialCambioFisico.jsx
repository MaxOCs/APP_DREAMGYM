import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, FlatList } from 'react-native';
import axios from 'axios';
import webservice from '../webservice/rutaweb';

const HistorialCambioFisico = ({ route }) => {
  const { nombreUsuario } = route.params;
  const [FotosHistorial, setFotosHistorial] = useState([]);
  const [loadingFoto, setLoadingFoto] = useState(true);
  const [errorFoto, setErrorFoto] = useState(null);
  const urlfotohistotial = `${webservice}/fotos/historial/1`;

  useEffect(() => {
    const fetchHistoralfotos = async () => {
      try {
        const response = await axios.get(urlfotohistotial);
        console.log(response.data); 
        setFotosHistorial(response.data.foto); //para acceder al arreglo
      } catch (error) {
        console.error(error);
        setErrorFoto('Error al cargar los datos');
      } finally {
        setLoadingFoto(false);
      }
    };

    fetchHistoralfotos();
  }, []);

  // Aqui para renderizar
  const renderItem = ({ item, index }) => (
    <View style={styles.userContainer}>
      <Text style={styles.date}>Fecha: {item.fecha}</Text>
      <Image
        source={{ uri: item.foto }}
        style={styles.image}
      />
    </View>
  );

  return (
    <View>
      <Text style={styles.text}>Historial de mi cambio fisico</Text>
    <FlatList
      data={FotosHistorial}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.container}
      ListEmptyComponent={() => (
        <View style={styles.container}>
          {loadingFoto ? <Text>Cargando...</Text> : <Text>No hay datos disponibles</Text>}
        </View>
      )}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  image: {
    width: 350,
    height: 300,
    marginVertical: 10,
  },
  userContainer: {
    marginBottom: 30,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,

  },
  date: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default HistorialCambioFisico;

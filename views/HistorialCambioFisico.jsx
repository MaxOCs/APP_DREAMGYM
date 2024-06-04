import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Image, Text } from 'react-native';
import axios from 'axios';
import webservice from '../webservice/rutaweb';
import AvatarUser from '../componentes/CabezeraUser';

const HistorialCambioFisico = ({ route }) => {
  const {nombreUsuario} = route.params
  const [FotosHistorial, setFotosHistorial] = useState([]);
  const urlfotohistotial = `${webservice}/fotos/historial/1`;
  const [loadingFoto, setLoadingFoto] = useState(true);

  useEffect(() => {
    const fetchHistoralfotos = async () => {
      try {
        const response = await axios.get(urlfotohistotial);
        const fotoDecodificada = decodeURIComponent(response.data.foto); // Decodificar la URL de la foto
        setFotosHistorial(response.data.foto);
      } catch (error) {
        console.error(error);
        setErrorFoto('Error al cargar la foto');
      } finally {
        setLoadingFoto(false);
      }
    };
  
    fetchHistoralfotos();
  }, []);


  return (
    <View style={styles.container}>
      {FotosHistorial.map((Foto, index) => (
        <View key={index} style={styles.userContainer}>
          <Text style={styles.text}>Usuario:{nombreUsuario}</Text>
          <Image
            source={{ uri: (Foto) }}
            style={styles.image}
          />
          {/* Aquí puedes agregar más datos del usuario */}
        </View>
      ))}
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
  text:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
  userContainer: {
    marginBottom: 16,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default HistorialCambioFisico;
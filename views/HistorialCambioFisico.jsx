import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Image, Text } from 'react-native';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import colors from '../styles/colores';

const HistorialCambioFisico = ({ route }) => {
  const { fotosTomadas } = route.params;
  const [ultimaFoto, setUltimaFoto] = useState(null);
  const [takefoto, setTakeFoto] = useState(null); // No olvides inicializar el estado para controlar la obtención de fotos

  useEffect(() => {
    const obtenerUltimaFoto = async () => {
      try {
        // Obtener las últimas fotos del rollo de la cámara
        const fotos = await CameraRoll.getPhotos({ first: 1, assetType: 'Photos' });

        // Verificar si se encontraron fotos
        if (fotos.edges.length > 0) {
          // Obtener la última foto de la lista de fotos
          const ultimaFoto = fotos.edges[0].node.image.uri;
          setUltimaFoto(ultimaFoto);
        }
      } catch (error) {
        console.error('Error al obtener la última foto:', error);
      }
    };

    obtenerUltimaFoto();
  }, [takefoto]); // Dependencia takefoto para ejecutar useEffect cuando cambie

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.Primaryblue, fontSize: 20 }}>Mi historial cambio físico</Text>
      {ultimaFoto && <Image source={{ uri: ultimaFoto }} style={styles.image} />} {/* Mostrar la última foto si está disponible */}
      <FlatList
        data={fotosTomadas}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
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
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
});

export default HistorialCambioFisico;

import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Image, Text, Platform } from 'react-native';
import CameraRoll from '@react-native-camera-roll/camera-roll';
import colors from '../styles/colores';

const HistorialCambioFisico = ({ route }) => {
  const { nombreUsuario } = route.params;
  const [fotosTomadas, setFotosTomadas] = useState([]);

  useEffect(() => {
    const obtenerFotos = async () => {
      if (Platform.OS === 'android') {
        // Aquí puedes omitir la solicitud de permisos si estás seguro de que ya están otorgados
      }
      try {
        const fotos = await CameraRoll.getPhotos({ first: 20, assetType: 'Photos' });
        if (fotos.edges.length > 0) {
          const uris = fotos.edges.map(edge => edge.node.image.uri);
          setFotosTomadas(uris);
        }
      } catch (error) {
        console.error('Error al obtener las fotos:', error);
      }
    };

    obtenerFotos();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.Primaryblue, fontSize: 20 }}>Mi historial cambio físico</Text>
      <FlatList
        data={fotosTomadas}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={{ width: 200, height: 200, margin: 10 }} />
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
});

export default HistorialCambioFisico;

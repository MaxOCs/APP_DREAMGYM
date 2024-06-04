import React, { useRef, useEffect, useState } from 'react';
import { Text, View, StyleSheet, PermissionsAndroid, Alert, TouchableOpacity } from 'react-native';
import { Camera, useCameraDevice } from 'react-native-vision-camera';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import axios from 'axios';
import RNFS from 'react-native-fs';

const CamaraFisico = ({ navigation }) => {
  const camera = useRef(null);
  const device = useCameraDevice('back');
  const [hasPermission, setHasPermission] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Permiso de Cámara',
          message: 'Esta aplicación necesita acceso a tu cámara',
          buttonNeutral: 'Preguntar Más Tarde',
          buttonNegative: 'Cancelar',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setHasPermission(true);
      } else {
        Alert.alert('Permiso denegado', 'No puedes usar la cámara sin permiso');
      }
    } catch (err) {
      console.warn(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const tomarFoto = async () => {
    try {
      const file = await camera.current.takePhoto();
      const savedPhotoUri = await CameraRoll.save(`file://${file.path}`, {
        type: 'photo',
      });

      // Leer el archivo y convertirlo a base64
      const filePath = `file://${file.path}`;
      const base64Image = await RNFS.readFile(filePath, 'base64');

      // Enviar la imagen al servidor usando una solicitud POST
      const response = await axios.post('https://10.73.126.103/GymAplication/public/guardarfoto', {
        image: base64Image,
      });

      console.log('Respuesta del servidor:', response.data);
      navigation.navigate('CambioFisico', { fotoUri: savedPhotoUri });

    } catch (error) {
      console.error('Error al tomar foto:', error);
    }
  };

  if (isLoading) return <Text>Loading...</Text>;
  if (!hasPermission) return <Text>No tienes permisos para usar la cámara</Text>;
  if (device == null) return <Text>Loading camera device...</Text>;

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        photo={true}
        isActive={true}
        ref={camera}
      />
      <TouchableOpacity style={styles.captureButton} onPress={tomarFoto}>
        <View style={styles.captureButtonInner} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  captureButton: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default CamaraFisico;

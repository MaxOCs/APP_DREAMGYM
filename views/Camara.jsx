import React, { useRef, useEffect, useState } from 'react';
import { Button, Text, View, StyleSheet, PermissionsAndroid, Alert,TouchableOpacity } from 'react-native';
import { Camera, useCameraDevice } from 'react-native-vision-camera';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';

const PantallaCamara = ({ navigation}) => {
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

  const TomarFoto = async () => {
    try {
      const file = await camera.current.takePhoto();
      await CameraRoll.saveAsset(`file://${file.path}`, {
        type: 'photo',
      });
      navigation.goBack(null);
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
<<<<<<< HEAD
      <Button title='Foto' onPress={TomarFoto} />
=======
      <TouchableOpacity style={styles.captureButton} onPress={TomarFoto}>
        <View style={styles.captureButtonInner} />
      </TouchableOpacity>
>>>>>>> Main
    </View>
  );
};

const styles = StyleSheet.create({
<<<<<<< HEAD
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
=======
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
>>>>>>> Main
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },  
});

export default PantallaCamara;


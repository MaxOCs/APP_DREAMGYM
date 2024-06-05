import React, { useEffect, useState } from 'react';
import { Text, TextInput, StyleSheet, View,TouchableOpacity,Image } from 'react-native';
import webservice from '../webservice/rutaweb'
import BotonPrincipal from '../componentes/botonPrincipal';
import { Avatar,Icon, color } from '@rneui/base';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import Toast from 'react-native-toast-message';

const Registro = ({ navigation }) => {
  const [takefoto, setTakeFoto] = useState(null);
  const [ultimaFoto, setUltimaFoto] = useState(null);
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [foto,setfoto]=useState('')
  const [error, setError] = useState('');
  const [imagen, setImagen] = useState('https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1788068356.1716163200&semt=ais_user');



  const handleRegistro = async () => {
    if (!nombre || !password || !foto) {
      setError('Faltan campos por completar');
      return;
    }
  
    const datos = new URLSearchParams({
      nombre,
      password,
      foto: encodeURIComponent(foto), // Asegúrate de codificar la URL de la foto
    }).toString();
  
    const url = `${webservice}/registro?${datos}`;
  
    console.log('Datos para el registro:', datos);
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        
          navigation.navigate('Bienvenido');

      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Error en el registro');
      }
    } catch (error) {
      console.error('Error de red:', error.message);
      setError('Error de red');
    }
  };
  
  
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
          // Verificar si se debe actualizar la imagen
          if (takefoto) {
            setImagen(ultimaFoto);
            setfoto(ultimaFoto);
            // Restablecer takefoto a false después de actualizar la imagen
            setTakeFoto(false);
            console.log('la ruta de la foto es esta:'+ ultimaFoto.toString());
          }
        }
      } catch (error) {
        console.error('Error al obtener la última foto:', error);
      }
    };
  
    obtenerUltimaFoto();
  }, [takefoto]); 
  
  const hadleCamara = () => {
    navigation.navigate('Camara');
    setTakeFoto(true); // Actualizamos el estado takefoto aquí
  };
   

  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro</Text>
      <TouchableOpacity style={styles.avatarContainer} onPress={hadleCamara}>
        <Avatar
          size={68}
          rounded
          source={{ uri: imagen }}
          title="Bj"
          containerStyle={styles.avatar}
        >
          <Avatar.Accessory size={24} /> 
        </Avatar>
      </TouchableOpacity>
      <View style={styles.formulario}>
        <Image source={require('../src/user.png')} style={styles.icono} />
        <TextInput
          placeholder='Ingresa un nombre de usuario'
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
        />
      </View>
      <View style={styles.formulario}>
        <Icon
          name='lock'
          color='#00aced'
          containerStyle={styles.icono}
        />
        <TextInput
          placeholder='Ingresa una contraseña'
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <BotonPrincipal onPress={handleRegistro} title="Registrarme" />

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    backgroundColor: 'grey',
  },
  formulario: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 8,
  },
  icono: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingLeft: 10,
    color: '#333',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  titulo:
  {
    fontSize: 40,
    color: 'blue',
    textAlign: 'center',
    marginBottom: 50,
    color: '#5C84FF',
    fontWeight: 'bold',
  }
});

export default Registro;

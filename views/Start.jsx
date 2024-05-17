import React from 'react';
import{Text,TextInput,StyleSheet,View} from 'react-native';
import ImagenesComponente from "../componentes/Imagenes";
import BotonPrincipal from "../componentes/botonPrincipal";

const Start = ({route, navigation}) => {
  const { category, level} = route.params || {};
  const imageUrl = imagenCaso(category, level); // Llamamos a la función para obtener la imagen correcta

    const titulo = category && level
        ? `Entrenamiento de ${category} ${level} `
        : 'Entrenamiento ?';

       
    
    
  return (
   
    <View style={styles.container}>
    <ImagenesComponente uri={imageUrl} width={400} height={400} /> 
    <Text>{titulo}</Text>
    <Text>NUMEROS EJERCICIOS  {category || 'el entrenamiento general'}</Text>
    <BotonPrincipal onPress={() => navigation.navigate('Ejercicio')} title="Comenzar" />
    </View>

  );
};

//ESTE METODO DEPENDIENDO LA CATEGORIA Y EL NIVEL PUEDE DAR UNA IMAGEN DIFERENTE
const imagenCaso = (category, level) => {
  switch (category) {
    case 'Fuerza':
      switch (level) {
        case 'Principiante':
          return 'https://cdn.pixabay.com/photo/2016/03/27/07/08/muscle-1282232_1280.jpg';
        case 'Intermedio':
          return 'https://cdn.pixabay.com/photo/2016/03/27/07/08/muscle-1282232_1280.jpg';
        case 'Experto':
          return 'https://cdn.pixabay.com/photo/2016/03/27/07/08/muscle-1282232_1280.jpg';
      }
    case 'Hipertrofia':
      switch (level) {
        case 'Principiante':
          return 'https://cdn.pixabay.com/photo/2016/03/27/07/08/muscle-1282232_1280.jpg';
        case 'Intermedio':
          return 'https://cdn.pixabay.com/photo/2016/03/27/07/08/muscle-1282232_1280.jpg';
        case 'Experto':
          return 'https://cdn.pixabay.com/photo/2016/03/27/07/08/muscle-1282232_1280.jpg';
      }
  }
};


const styles = StyleSheet.create({
  container: {
      padding: 16,
  },
});
export default Start;

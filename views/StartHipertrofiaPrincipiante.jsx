import React from 'react';
import{Text,TextInput,StyleSheet,View} from 'react-native';
import ImagenesComponente from "../componentes/Imagenes";
import BotonPrincipal from "../componentes/botonPrincipal";

const StartFuerzaExperto = ({navigation}) => {
  
  return (
    
    <View>

    <View>
    <ImagenesComponente uri="https://cdn.pixabay.com/photo/2016/03/27/07/08/man-1282232_1280.jpg" width={400} height={400} />
    </View>

    <Text>
      Entrenamiento de Fuerza Experto
    </Text>

    <Text>
      AQUI VAN LOS NUMEROS DE EJERCICIO  {/*EN TEORIA AQUI SE SACAN LOS NUMERO DE EJERCICIO POR NIVEL DE LA (BD)*/}
    </Text>

    <BotonPrincipal onPress={() =>navigation.navigate('Ejercicios Experto Fuerza')} title="Comenzar"/> 

    </View>
   

   

  );
};

export default StartFuerzaExperto;

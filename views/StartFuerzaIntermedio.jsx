import React from 'react';
import{Text,TextInput,StyleSheet,View} from 'react-native';
import ImagenesComponente from "../componentes/Imagenes";
import BotonPrincipal from "../componentes/botonPrincipal";

const StartFuerzaIntermedio = ({navigation}) => {
  
  return (
    
    <View>

    <View>
    <ImagenesComponente uri="https://img.freepik.com/foto-gratis/cerca-hombre-haciendo-entrenamiento-crossfit_23-2149080427.jpg" width={400} height={400} />
    </View>

    <Text>
      Entrenamiento de Fuerza intermedio
    </Text>

    <Text>
      AQUI VAN LOS NUMEROS DE EJERCICIO  {/*EN TEORIA AQUI SE SACAN LOS NUMERO DE EJERCICIO POR NIVEL DE LA (BD)*/}
    </Text>

    <BotonPrincipal onPress={() =>navigation.navigate('Ejercicios Intermedio Fuerza')} title="Comenzar"/> 

    </View>
   

   

  );
};

export default StartFuerzaIntermedio;

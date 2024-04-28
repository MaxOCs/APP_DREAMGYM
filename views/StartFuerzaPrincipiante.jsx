import React from 'react';
import{Text,TextInput,StyleSheet,View} from 'react-native';
import ImagenesComponente from "../componentes/Imagenes";
import BotonPrincipal from "../componentes/botonPrincipal";

const StartFuerzaPrincipiante = ({navigation}) => {
  
  return (
    
    <View>

    <View>
    <ImagenesComponente uri="https://img.freepik.com/vector-premium/hombre-mujer-dibujos-animados-haciendo-ejercicio-mancuernas_52569-1374.jpg" width={400} height={400} />
    </View>

    <Text>
      Entrenamiento de Fuerza principiante
    </Text>

    <Text>
      AQUI VAN LOS NUMEROS DE EJERCICIO  {/*EN TEORIA AQUI SE SACAN LOS NUMERO DE EJERCICIO POR NIVEL DE LA (BD)*/}
    </Text>

    <BotonPrincipal onPress={() =>navigation.navigate('Ejercicios Principiante Fuerza')} title="Comenzar"/> 

    </View>
   

   

  );
};

export default StartFuerzaPrincipiante;

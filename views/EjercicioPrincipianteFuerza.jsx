import React from 'react';
import{Text,TextInput,StyleSheet,View} from 'react-native';
import ImagenesComponente from "../componentes/Imagenes";
import BotonPrincipal from "../componentes/botonPrincipal";

const EjercicioPrincipianteFuerza = ({navigation}) => {
  
  return (
    
    <View>

    <View>
    <ImagenesComponente uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxLt3a2peg34RCXSow62BkMWpmTPQwT16U1wKGvr9kOg&s" width={200} height={200} />
    </View>

    <Text>
      Primer ejercicio digamos q pecho {/*Se sacaria de la base de datos*/}
    </Text>

    <Text>
      AQUI va su descripcion  y se debe actualizar por el tiempo aki te toka max  {/*SU DESCRIPCION(BD)*/}
    </Text>

      {/*AQUI IRIA EL RELOJ Y UNA VEZ TERMINE EL TIEMPO CAMBIA DE EJERCICIO*/}
    </View>
   

   

  );
};

export default EjercicioPrincipianteFuerza;

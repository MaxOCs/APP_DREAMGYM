import React from "react";
import BotonPrincipal from "../componentes/botonPrincipal";
import InputText from "../componentes/InputText";
import{Text,View,StyleSheet} from 'react-native';
import ImagenesComponente from "../componentes/Imagenes";
import colors from "../styles/colores";


const HomeScreen = ({ navigation }) => {
    return (
      
      <View style = {styles.container}>
         <ImagenesComponente uri="https://st4.depositphotos.com/3265223/24936/v/450/depositphotos_249366040-stock-illustration-fitness-gym-logo-with-strong.jpg" width={100} height={100} />
          {/* TITULO DE GYMAPP*/}
           <Text style = {{color: colors.Primaryblue , fontSize: 36}}>GYMAPP</Text>
          {/* ESTOS SON LOS INPUTS*/}
            <InputText placeholder="Usuario" />
            <InputText placeholder="Contraseña" />
          
          {/* LABEL DE REGISTRARME PARA DIRIGIRME A PANTALLA REGISTRO*/}
            <Text  onPress={() => navigation.navigate('Registro')} style = {{color: colors.Primaryblue , fontSize: 17}}>Registrarme</Text>
         
          {/* BOTON PARA INICIAR SESION*/}
           <BotonPrincipal onPress={() =>navigation.navigate('Principal')} title="Iniciar sesión"/> 
      </View>
    
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 50, // Espacio debajo del título

    }
  });
  

  export default HomeScreen
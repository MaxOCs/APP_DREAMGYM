import React from "react";
import BotonPrincipal from "../componentes/botonPrincipal";
import InputText from "../componentes/InputText";
import{Text,View,StyleSheet} from 'react-native';
import ImagenesComponente from "../componentes/Imagenes";
import colors from "../styles/colores";


const NuevoIMC = ({navigation}) => {
  
  return (
    
    <View style = {styles.container}>
     {/* TITULO DE GYMAPP*/}
      <Text style = {{color: colors.Primaryblue , fontSize: 20}}>Indice de masa corporal</Text>
     {/* ESTOS SON LOS INPUTS*/}
       <InputText placeholder="Altura" />
       <InputText placeholder="Peso" />
      
      
      {/* ESTE LABEL VA A GENERAR EL IMC Y SE GUARDARA EN LA BASE DE DATOS ESTA VARIABLE*/}

       <Text  style = {{color: colors.Primaryblue , fontSize: 17}}>RESULTADO:</Text>

     {/* BOTON PARA GUARDAR EL INDICE DE MASA CORPORAL*/}
      <BotonPrincipal onPress={() =>navigation.navigate('Principal')} title="Generar"/> 
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
export default NuevoIMC;

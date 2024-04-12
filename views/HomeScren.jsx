import React from "react";
import BotonPrincipal from "../componentes/botonPrincipal";
import{Text,View,StyleSheet} from 'react-native';
import colors from "../styles/colores";


const HomeScreen = ({ navigation }) => {
    return (
      <View style = {styles.container}>
          <Text style = {{color: colors.Primaryblue , fontSize: 36}}>GYMAPP</Text>
          <BotonPrincipal onPress={() =>navigation.navigate('Login', { name: 'Jane' })} title="Avanzar"/> 
      </View>
    
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });
  

  export default HomeScreen
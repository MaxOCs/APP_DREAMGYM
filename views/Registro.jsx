import React from "react";
import{Text,TextInput,StyleSheet,View} from 'react-native';
import BotonPrincipal from "../componentes/botonPrincipal";
import colors from "../styles/colores";
import CustomText from "../componentes/InputText";

const Registro = ({ navigation }) => {
    return (
      <View>
        <Text style ={styles.texto}>NOMBRE</Text >
        <TextInput style = {styles.input}></TextInput>
        <Text style ={styles.texto} >EDAD</Text>
        <TextInput style = {styles.input}></TextInput>
        <Text style ={styles.texto}>PESO</Text>
        <TextInput style = {styles.input}></TextInput>
        <BotonPrincipal onPress={() =>navigation.navigate('Bienvenido')} title="Registrarme"/> 

      </View>
      
      
    );
  };
  
  
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
    borderRadius: 3,
    backgroundColor: colors.TextoTitulo
  },
  texto:{
    margin:12,
    padding: 2,
    fontSize: 18,
    color: colors.NegroTitulo
  }
});

export default Registro;
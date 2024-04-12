import React from "react";
import{Text,TextInput,StyleSheet,View} from 'react-native';
import colors from "../styles/colores";
import CustomText from "../componentes/InputText";

const Login = ({ route }) => {
    return (
      <View>
        {/*<Text style ={styles.texto}>This is {route.params.name}'s profile</Text>*/}
        <Text style ={styles.texto}>NOMBRE</Text>
        <CustomText/>
        <TextInput style = {styles.input}></TextInput>
        <Text style ={styles.texto} >EDAD</Text>
        <TextInput style = {styles.input}></TextInput>
        <Text style ={styles.texto}>PESO</Text>
        <TextInput style = {styles.input}></TextInput>

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

export default Login
import React from "react";
import{Text,TextInput,StyleSheet,View} from 'react-native';
import colors from "../styles/colores";
import CustomText from "../componentes/InputText";

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
  

const Login = ({ route }) => {
    return (
      <View>
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
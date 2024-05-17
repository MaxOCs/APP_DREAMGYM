import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar } from '@rneui/themed';
import { Image, Text } from "@rneui/base";
import colors from "../styles/colores"; 
import React from 'react';

// LEER **********
// Mi idea es que este sea todo el componente de la cabezera del usuario donde se muestre nombre, foto y asi
// se le van a pasar por parametros aunque de momento estan estaticos. 

const AvatarUser = ({NameUsuario, ImgenUrl}) => {
  const [loadImage,setImagen] = useState ('');
  const [loadName,setName] = useState ('');

  useEffect(()=>{
    setImagen(ImgenUrl);
    setName(NameUsuario);
  },[ImgenUrl,NameUsuario]);
  
  return (
    <View style ={styles.contenedor}>
        <TouchableOpacity>
          <Avatar
            size={48}
            rounded
            source={{ uri: ImgenUrl }}
          />
      </TouchableOpacity>
      <View style={styles.contenedorText}>
        <Text style={styles.textsaludo}>Bienvenido!</Text>
        <Text style={styles.TextoTitulo}>{NameUsuario}</Text>
      </View>
      
    </View>
    
    
  );
};


const styles = StyleSheet.create({
    contenedor: {
      alignItems: 'center',
      flexDirection: 'row',
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#e0e0e0',
    },
    contenedorText: {
      marginLeft: 10,
    },
    TextoTitulo: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.NegroTitulo,
    },
    textsaludo:{
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.Primaryblue,
    }
  });

  export default AvatarUser;
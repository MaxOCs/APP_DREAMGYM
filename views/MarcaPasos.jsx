import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import ImagenesComponente from "../componentes/Imagenes";
import webservice from "../webservice/rutaweb";
import BotonPrincipal from "../componentes/botonPrincipal";

const Start = ({ route, navigation }) => {


    return (
        <View style={styles.container}>

            <View style={styles.textoYBotonContainer}>
            <Text style={styles.titulo}>marcapasos</Text>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
    },
    containerImagen:
    {

    },
    textoYBotonContainer: {
        marginTop: 60,         
        alignItems: 'center',  
      },
      titulo: {
        fontSize: 24,           
        fontWeight: 'bold',   
        marginBottom: 10,      
        textAlign: 'center',    
      },
      tamañoBoton:
      {
        width: 350,   // Ancho del botón
        height: 63,   // Alto del botón
      }
});

export default Start;

import React from "react";
import colors from "../styles/colores";
import { Text,StyleSheet,TouchableOpacity} from 'react-native';

const BotonPrincipal = ({ onPress, title }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  };


  const styles = StyleSheet.create({
    button: {
      backgroundColor: colors.Primaryblue, // Color de fondo del botón
      borderRadius: 10, // Radio de los bordes
      paddingHorizontal: 20, // Espaciado horizontal
      paddingVertical: 10, // Espaciado vertical
      alignItems: 'center', // Alineación horizontal de elementos
      justifyContent: 'center', // Alineación vertical de elementos
    },
    buttonText: {
      color: colors.TextoTitulo, // Color del texto del botón
      fontSize: 26, // Tamaño del texto
      fontWeight: 'bold', // Peso de la fuente
    },
  });

export default BotonPrincipal
  
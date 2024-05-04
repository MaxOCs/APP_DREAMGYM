import React from "react";
import{Text,StyleSheet,View} from 'react-native';
import { Button, Header, Icon} from '@rneui/base';
import AvatarUser from "../componentes/CabezeraUser";
import SliderItem from "../componentes/Slider-Item";

const Inicio = ({ navigation }) => {
    return (
      <View style={styles.container}>
      {/* Sección de Bienvenida */}
        <View style={styles.section}>
        <AvatarUser ImgenUrl={"https://randomuser.me/api/portraits/men/36.jpg"} NameUsuario={"Nombre apellido apellido"}/>
      </View>

      {/* Sección de Frase */}
      <View style={styles.quoteText}>
        <Text style={styles.quoteText}>
          "Aquí van las frases"
        </Text>
      </View>

      {/* Sección de Categorías en forma horizontal */}
      <SliderItem/>

      

    </View>
     
      
    );
  };
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    section: {
      marginVertical: 20, // Espacio entre secciones
    },
    welcomeText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    nameText: {
      fontSize: 18,
    },
    quoteText: {
      fontSize: 16,
      fontStyle: 'italic',
    },
    categoryHeader: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    horizontalCategories: {
      flexDirection: 'row', // Disposición horizontal
      justifyContent: 'space-between', // Espacio entre categorías
      alignItems: 'center', // Alineación vertical
    },
    categoryBlock: {
      backgroundColor: '#e0e0e0', // Color de fondo para el bloque
      width: 100, // Tamaño del cuadrado
      height: 100, // Tamaño del cuadrado
      justifyContent: 'center', // Centra el texto en el bloque
      alignItems: 'center', // Centra el texto en el bloque
      borderRadius: 10, // Bordes redondeados
      marginHorizontal: 10, // Espacio entre bloques
    },
  });
export default Inicio;
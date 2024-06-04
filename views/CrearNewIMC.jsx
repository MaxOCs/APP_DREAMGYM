import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import BotonPrincipal from '../componentes/botonPrincipal';
import InputText from '../componentes/InputText';
import colors from '../styles/colores';
import axios from 'axios';
import webservice from '../webservice/rutaweb';

const NuevoIMC = ({ route }) => {
  const { nombreUsuario } = route.params;
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [userIngresado, setUserIngresado] = useState(0);
  const [resultado, setResultado] = useState('');
  const [error, setError] = useState('');

  // Obtener el ID de usuario al cargar el componente
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`${webservice}/userIngresado/${nombreUsuario}`);
        setUserIngresado(response.data.usuario);
      } catch (error) {
        console.error('Error al obtener el ID de usuario:', error);
        setError('Error al obtener el ID de usuario');
      }
    };
    getUser();
  }, [nombreUsuario]);

  // Calcular el IMC
  const calcularIMC = () => {
    const alturaMetros = parseFloat(altura) / 100;
    const pesoKg = parseFloat(peso);

    if (!isNaN(alturaMetros) && !isNaN(pesoKg) && alturaMetros > 0 && pesoKg > 0) {
      const imc = pesoKg / (alturaMetros * alturaMetros);
      setResultado(imc.toFixed(1).toString());
    } else {
      setResultado('Por favor ingresa valores válidos');
    }
  };

  // METODO PARA REGISTRAR EL IMC
  const registrarIMC = async () => {
    try {
      const response = await axios.get(`${webservice}/registroIMC/${userIngresado}`, {
        params: {
          altura: altura,
          peso: peso,
          imc: resultado,
        },
      });
      console.log('IMC registrado correctamente:', response.data);
    } catch (error) {
      console.error('Error al registrar el IMC:', error);
      Alert.alert('Error', 'Error al registrar el IMC. Intenta nuevamente.'); //ALERTA PAL ERROR
    }
  };

  //Este metodo es para Calcular el IMC, y despues esperar un tiempo para el REGISTRARIMC()
  const handleGenerarYGuardar = () => {
    calcularIMC();
    setTimeout(() => {
      registrarIMC();
    }, 1000); 
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.Primaryblue, fontSize: 20 }}>Calcular mi I.M.C</Text>
      <Text style={styles.text}>Indice de Masa Corporal</Text>
      <InputText
        placeholder="Altura (cm)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <InputText
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <Text style={{ color: colors.Primaryblue, fontSize: 17 }}>RESULTADO: {resultado}</Text>
      <BotonPrincipal onPress={handleGenerarYGuardar} title="Generar" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default NuevoIMC;
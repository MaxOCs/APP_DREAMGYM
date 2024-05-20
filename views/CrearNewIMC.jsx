import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BotonPrincipal from '../componentes/botonPrincipal';
import InputText from '../componentes/InputText';
import colors from '../styles/colores';

const NuevoIMC = ({ navigation }) => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');
  const [error, setError] = useState('');


  const handleRegistro = async () => {
    
    
    if (!altura || !peso || isNaN(parseFloat(resultado))) {
      setError('Por favor calcula el IMC antes de registrar.');
      return;
    }
  
    const datos = new URLSearchParams({
        altura: parseFloat(altura),
        peso: parseFloat(peso),
        imc: parseFloat(resultado),
    }).toString();
  
    const url = `${webservice}/registro?${datos}`;
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        navigation.navigate('Bienvenido');
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Error en el registro');
      }
    } catch (error) {
      console.error('Error de red:', error.message);
      setError('Error de red');
    }
  };
  


  const calcularIMC = () => {

    const alturaMetros = parseFloat(altura) / 100; 
    const pesoKg = parseFloat(peso);

    if (!isNaN(alturaMetros) && !isNaN(pesoKg) && alturaMetros > 0 && pesoKg > 0) {
      const imc = pesoKg / (alturaMetros * alturaMetros);
      setResultado(imc.toFixed(1)); 
    } else {
      setResultado('Por favor ingresa valores válidos');
    }
  };

  return (
    <View style={styles.container}>
      {/* TÍTULO DE GYMAPP */}
      <Text style={{ color: colors.Primaryblue, fontSize: 20 }}>Índice de masa corporal</Text>
      {/* INPUTS */}
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
      {/* RESULTADO DEL IMC */}
      <Text style={{ color: colors.Primaryblue, fontSize: 17 }}>RESULTADO: {resultado}</Text>
      {/* BOTÓN PARA CALCULAR EL IMC */}
      <BotonPrincipal onPress={calcularIMC} title="Generar" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50, // Espacio debajo del título
  },
});

export default NuevoIMC;

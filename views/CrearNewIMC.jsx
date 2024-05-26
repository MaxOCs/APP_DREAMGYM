import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BotonPrincipal from '../componentes/botonPrincipal';
import InputText from '../componentes/InputText';
import colors from '../styles/colores';

const NuevoIMC = ({ navigation, route }) => {


  const { nombreUsuario } = route.params || { nombreUsuario: 'Usuario predeterminado' };
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(0);
  const [error, setError] = useState('');

  console.log(nombreUsuario);
  
  /* 
  const datos = new URLSearchParams({
    nombre,
    password,
    foto: encodeURIComponent(foto), // Asegúrate de codificar la URL de la foto
  }).toString();

  useEffect(() => {
    const registrarIMC = async () => {
      try {
        const response = await axios.get(url); 
        setResultado(response.data.ejercicio); // Asegúrate de acceder a la propiedad 'ejercicio'
      } catch (error) {
        console.error(error);
      }
    };

    registrarIMC();
  }, []);

*/

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
      <Text>{nombreUsuario}</Text>
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

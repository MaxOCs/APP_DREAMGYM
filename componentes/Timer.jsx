import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const ContadorRegresivo = () => {
  const [tiempoRestante, setTiempoRestante] = useState(180); // 3 minutos en segundos
  const [iniciado, setIniciado] = useState(false);
  const [parar, setParar] = useState(false);
  const [botonText,setbutonText] = useState('Iniciar');

  const iniciarContador = () => {
    setIniciado(true);
  };

  const pararContador = () => {
    setIniciado(false);
    setbutonText('Iniciar'); 
  };

  useEffect(() => {
    if (iniciado) {
      const intervalo = setInterval(() => {
        setTiempoRestante(prevTiempo => {
          if (prevTiempo === 0) {
            clearInterval(intervalo);
            //reseteo del contador para volver a iniciarlo
            setIniciado(false);
            setTiempoRestante(180);
            setbutonText('Iniciar');
            return 0;    
          } else {
            setbutonText('Parar');
            return prevTiempo - 1;
          }
        });
      }, 1000);

      return () => clearInterval(intervalo);
    }
  }, [iniciado]);

  // Función para formatear el tiempo restante a formato MM:SS
  const formatoTiempo = (segundos) => {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${minutos < 10 ? '0' : ''}${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>Tiempo restante:</Text>
      <Text style={styles.textoTiempo}>{formatoTiempo(tiempoRestante)}</Text>
        <TouchableOpacity style={styles.boton} onPress={iniciado ? pararContador :iniciarContador}>
          <Text style={styles.textoBoton}>{botonText}</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
  },
  texto: {
    fontSize: 20,
    marginBottom: 10,
  },
  textoTiempo: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  boton: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderRadius: 50 ,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBoton: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ContadorRegresivo;


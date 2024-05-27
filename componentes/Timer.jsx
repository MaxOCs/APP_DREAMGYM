import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const ContadorRegresivo = ({ tiempo, onFin }) => {
  const [tiempoRestante, setTiempoRestante] = useState(60); // Iniciar con 60 segundos
  const [iniciado, setIniciado] = useState(false);
  const [botonText, setBotonText] = useState('Iniciar');

  useEffect(() => {
    let intervalo;
    if (iniciado) {
      intervalo = setInterval(() => {
        setTiempoRestante(prevTiempo => {
          if (prevTiempo <= 1) {
            clearInterval(intervalo);
            setIniciado(false);
            setBotonText('Iniciar');
            onFin();
            return 0;
          } else {
            return prevTiempo - 1;
          }
        });
      }, 1000);
    }
    return () => clearInterval(intervalo);
  }, [iniciado, onFin]);

useEffect(() => {
  if (!iniciado) {
    setTiempoRestante(tiempo); // Reiniciar a 60 segundos (1 minuto)
  }
}, [iniciado]);


  const iniciarPararContador = () => {
    if (iniciado) {
      setIniciado(false);
      setBotonText('Iniciar');
    } else {
      setIniciado(true);
      setBotonText('Parar');
    }
  };

  const formatoTiempo = (segundos) => {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${minutos < 10 ? '0' : ''}${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>Tiempo restante:</Text>
      <Text style={styles.textoTiempo}>{formatoTiempo(tiempoRestante)}</Text>
      <TouchableOpacity style={styles.boton} onPress={iniciarPararContador}>
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
    borderRadius: 50,
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

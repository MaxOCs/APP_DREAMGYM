import React from 'react';
import EntrenamientoTemplate from '../componentes/TipoEntrenamiento';

const Nivel = ({navigation}) => {
  const handleLevelSelect = (level) => {
  
    
    
    if(level === 'Principiante')
    {
      navigation.navigate('Fuerza Principiante');
    }
    if(level === 'Intermedio')
    {
      navigation.navigate('Fuerza intermedio');

    }
    if(level === 'Experto')
    {
      navigation.navigate('Fuerza experto');

    }
    
    //aqui agregar el siguiente nivel dependiendo
  };

  return (
    <EntrenamientoTemplate
      title="Entrenamiento de Fuerza"
      question="¿Qué nivel consideras que estás?"
      onLevelSelect={handleLevelSelect}
    />
  );
};

export default Nivel;

import React from 'react';
import EntrenamientoTemplate from '../componentes/TipoEntrenamiento';

const FuerzaScreen = ({navigation}) => {
  const handleLevelSelect = (level) => {
    if(level === 'Principiante')
    {
      navigation.navigate('Fuerza Principiante');
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

export default FuerzaScreen;

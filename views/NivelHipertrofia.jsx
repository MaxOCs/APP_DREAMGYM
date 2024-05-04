import React from 'react';
import EntrenamientoTemplate from '../componentes/TipoEntrenamiento';

const HipertrofiaScreen = ({navigation}) => {
  const handleLevelSelect = (level) => {
    if(level === 'Principiante')
    {
      navigation.navigate('Hipertrofia Principiante');
    }
    if(level === 'Intermedio')
    {
      navigation.navigate('Hipertrofia intermedio');

    }
    if(level === 'Experto')
    {
      navigation.navigate('Hipertrofia experto');

    }
  };

  return (
    <EntrenamientoTemplate
      title="Entrenamiento de Hipertrofia"
      question="¿Qué nivel consideras que estás?"
      onLevelSelect={handleLevelSelect}
    />
  );
};

export default HipertrofiaScreen;

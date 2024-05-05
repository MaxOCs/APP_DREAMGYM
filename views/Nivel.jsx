import React from 'react';
import EntrenamientoTemplate from '../componentes/TipoEntrenamiento';

const Nivel = ({ navigation, route }) => {

  //ACA AGARRAMOS EL PARAMETRO DE CATEGORIA
  const { category } = route.params || {};

  const handleLevelSelect = (level) => {
    if (level === 'Principiante') {
      navigation.navigate('Start', {
        category, //AKI AGARRAMOS CATEGORIA
        level, //LEVEL
      });
    } else if (level === 'Intermedio') {
      navigation.navigate('Start', {
        category,
        level,
      });
    } else if (level === 'Experto') {
      navigation.navigate('Start', {
        category,
        level,
      });
    }
    // Puedes agregar más condiciones si es necesario
  };

  return (
    <EntrenamientoTemplate
      title={`Entrenamiento de ${category || 'Desconocido'}`} // Personalizamos el título
      question="¿Qué nivel consideras que estás?"
      onLevelSelect={handleLevelSelect}
    />
  );
};

export default Nivel;

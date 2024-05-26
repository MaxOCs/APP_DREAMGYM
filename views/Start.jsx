import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import ImagenesComponente from "../componentes/Imagenes";
import webservice from "../webservice/rutaweb";
import BotonPrincipal from "../componentes/botonPrincipal";

const Start = ({ route, navigation }) => {
    const { category, level } = route.params || {};
    const [ejercicioCount, setEjercicioCount] = useState(null);
    const [idCategoria, setIdCategoria] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
       
      //PARA VER SI ME DESPLIEGA BIEN LA CATEGORIA Y EL NIVEL
        console.log('Category:', category);
        console.log('Level:', level);

        const fetchExerciseCount = async () => {
            try {
       
              //FALTA OBTENER CATEGORIA Y LEVEL SU ID







                //API PARA OBTENER EL CONTEO DE EJERCICIOS POR ID DE ENTRENAMIENTO
                const countResponse = await axios.get(`${webservice}/count-ejercicios/1`);
                setEjercicioCount(countResponse.data.count);
            } catch (error) {
                console.error(error);
                setError(error.message || 'Error desconocido');
            } finally {
                setLoading(false);
            }
        };

        if (category && level) {
            fetchExerciseCount();
        }
    }, [category, level]);

    const imageUrl = imagenCaso(category, level);

    const titulo = category && level
        ? `Entrenamiento de ${category} ${level}`
        : 'Entrenamiento ?';

    return (
        <View style={styles.container}>
            <ImagenesComponente uri={imageUrl} width={400} height={400} />
            <Text>{titulo}</Text>
            <Text>
                {loading ? 'Cargando...' : error ? `Error: ${error}` : `NÚMERO DE EJERCICIOS: ${ejercicioCount !== null ? ejercicioCount : 'No disponible'}`}
            </Text>
            <BotonPrincipal onPress={() => navigation.navigate('Ejercicio')} title="Comenzar" />
        </View>
    );
};

const imagenCaso = (category, level) => {
    switch (category) {
        case 'Fuerza':
            switch (level) {
                case 'Principiante':
                    return 'https://cdn.pixabay.com/photo/2016/03/27/07/08/muscle-1282232_1280.jpg';
                case 'Intermedio':
                    return 'https://cdn.pixabay.com/photo/2016/03/27/07/08/muscle-1282232_1280.jpg';
                case 'Experto':
                    return 'https://cdn.pixabay.com/photo/2016/03/27/07/08/muscle-1282232_1280.jpg';
            }
        case 'Hipertrofia':
            switch (level) {
                case 'Principiante':
                    return 'https://cdn.pixabay.com/photo/2016/03/27/07/08/muscle-1282232_1280.jpg';
                case 'Intermedio':
                    return 'https://cdn.pixabay.com/photo/2016/03/27/07/08/muscle-1282232_1280.jpg';
                case 'Experto':
                    return 'https://cdn.pixabay.com/photo/2016/03/27/07/08/muscle-1282232_1280.jpg';
            }
    }
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
});

export default Start;

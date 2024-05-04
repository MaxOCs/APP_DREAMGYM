import { TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated, ScrollView, Touchable } from 'react-native';

//debe de recibir las categorias como parametro para renderizarlas en el data o agregarlas manualmente

const SliderItem = () => {
    const scrollX = useRef(new Animated.Value(0)).current;

    const handleScroll = (event) => {
        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
        const offsetX = contentOffset.x;
        const contentWidth = contentSize.width;
        const layoutWidth = layoutMeasurement.width;

        // Calcular la posición de desplazamiento normalizada (de 0 a 1)
        const position = offsetX / (contentWidth - layoutWidth);

        // Actualizar scrollX con la posición de desplazamiento normalizada
        scrollX.setValue(position);
        // Registro de consola para el valor de la posición de desplazamiento
        console.log("Posición de desplazamiento:", offsetX);
    };

    // este data debe de recibir las catgorias
    const data = [
        { id: '1', text: 'FUERZA' },
        { id: '2', text: 'HIPERMAMDAS' },
        { id: '3', text: 'YA NO R3ECUERSDO TENGO SUEÑO' },
        { id: '4', text: 'YA NO R3ECUERSDO TENGO SUEÑO' },
        { id: '5', text: 'YA NO R3ECUERSDO TENGO SUEÑO' },
        { id: '6', text: 'YA NO R3ECUERSDO TENGO SUEÑO' },
        
    ];

    const renderItem = ({ item, index }) => {
        const itemWidth = 200; // Ancho de cada elemento
        const totalWidth = data.length * itemWidth; // Ancho total de todos los elementos
        const interval = totalWidth / (data.length - 1); // Intervalo uniforme
        const inputRange = [index - 1, index, index + 1]; // Utilizar el índice como el rango de entrada
        const outputRangeOpacity = [0.5, 1, 0.5]; // Opacidad máxima para el elemento actual, 0.5 para los demás
        const outputRangeScale = [0.8, 1, 0.8]; // Escala máxima para el elemento actual, 0.8 para los demás
        //const inputRange = data.map((_, i) => i * interval); //calcular el rango de lo items para hacerlo dinamico 
        //const outputRangeOpacity = data.map((_, i) => (i === index ? 1 : 0.5)); // Opacidad máxima para el elemento actual, 0.5 para los demás
        //const outputRangeScale = data.map((_, i) => (i === index ? 1 : 0.8)); // Escala máxima para el elemento actual, 0.8 para los demás
        const opacity = scrollX.interpolate({
            inputRange,
            outputRange: outputRangeOpacity,
            extrapolate: 'clamp',
        });
        const scale = scrollX.interpolate({
            inputRange,
            outputRange: outputRangeScale,
            extrapolate: 'clamp',
        });

        return (
            //Render de los elementos
            <TouchableOpacity key={item.id} style={[styles.itemContainer, { opacity, transform: [{ scale }] }]}>
                <Text style={styles.text}>{item.text}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={12}
            >
                {data.map((item, index) => (
                    <View key={item.id} style={styles.item}>
                        {renderItem({ item, index })}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width:400,
        
    },
    itemContainer: {
        width: 200,
        height: 150,
        borderRadius: 10,
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
        //paddingHorizontal: 10,
    },
    item: {
        width: 200,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default SliderItem;

import { TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../styles/colores';

const SliderItem = ({ navigation, nombreUsuario }) => {
    
    const scrollX = new Animated.Value(0);  


    //AGREGAMOS LA PANTALLA, EL NIVEL, CATEGORIA(SI ES EL CASO)
    const data = [
        { id: '1', text: 'FUERZA', screen: 'Nivel', category: 'Fuerza'},
        { id: '2', text: 'HIPERTROFIA', screen: 'Nivel', category: 'Hipertrofia'},
        { id: '3', text: 'Nuevo I.M.C', screen: 'IMC', params: {nombreUsuario}},
        { id: '4', text: 'Cardio', screen: 'marcapasos'},
        { id: '5', text: 'Mi historial IMC', screen: 'historialimc', params: {nombreUsuario}},
        { id: '6', text: 'Mi cambio fisico', screen: 'CambioFisico', params: {nombreUsuario}},

    ];

    //HANDLE PARA NAVEGAR ENTRE PANTALLAS Y OBTENER EL PARAMETRO
    const handleNavigation = (screenName,  params = {}) => {
    
            navigation.navigate(screenName, params);
        };

    const renderItem = ({ item, index }) => {
        const itemWidth = 150;
        const inputRange = [(index - 1) * itemWidth, index * itemWidth, (index + 1) * itemWidth];
        const outputRangeOpacity = [0.5, 1, 0.5];
        const outputRangeScale = [0.8, 1, 0.8];
    
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

            <TouchableOpacity
                key={item.id}
                style={[styles.itemContainer, { opacity, transform: [{ scale }] }]}
                //AQUI SE PASAN LOS PARAMETROS DEL METODO handle
                onPress={() => handleNavigation(item.screen, { category: item.category, nombreUsuario: nombreUsuario })}
                >
                <LinearGradient
                    colors={[colors.GradientStart, colors.GradientEnd]}
                    style={styles.itemContainer}
                >
                    <Text style={styles.text}>{item.text}</Text>
                </LinearGradient>
                
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <Animated.FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                scrollEventThrottle={16}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical:15,
        width: '100%',
    },
    itemContainer: {
        width: 200,
        height: 150,
        borderRadius: 10,
        backgroundColor: colors.Primaryblue,
        justifyContent: 'center',
        alignItems: 'center',
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
        color: '#fff',
    },
});

export default SliderItem;

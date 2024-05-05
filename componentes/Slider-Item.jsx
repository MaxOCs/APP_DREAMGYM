import { TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated, ScrollView } from 'react-native';
import CategoryItem from './CategoriasItem';

const SliderItem = ({ navigation }) => {
    const scrollX = useRef(new Animated.Value(0)).current;

    const handleScroll = (event) => {
        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
        const offsetX = contentOffset.x;
        const contentWidth = contentSize.width;
        const layoutWidth = layoutMeasurement.width;

        const position = offsetX / (contentWidth - layoutWidth);
        scrollX.setValue(position);
    };

    //AGREGAMOS LA PANTALLA, EL NIVEL, CATEGORIA(SI ES EL CASO)
    const data = [
        { id: '1', text: 'FUERZA', screen: 'Nivel', category: 'Fuerza'},
        { id: '2', text: 'HIPERTROFIA', screen: 'Nivel', category: 'Hipertrofia'},
        { id: '3', text: 'EJERCICIO'},
    ];

    //HANDLE PARA NAVEGAR ENTRE PANTALLAS Y OBTENER EL PARAMETRO
    const handleNavigation = (screenName,  params = {}) => {
        navigation.navigate(screenName, params);
    };

    const renderItem = ({ item, index }) => {
        const itemWidth = 200;
        const totalWidth = data.length * itemWidth;
        const inputRange = [index - 1, index, index + 1];
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
                onPress={() => handleNavigation(item.screen, { category: item.category })}
                >
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
        width: 400,
    },
    itemContainer: {
        width: 200,
        height: 150,
        borderRadius: 10,
        backgroundColor: 'lightgrey',
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
    },
});

export default SliderItem;

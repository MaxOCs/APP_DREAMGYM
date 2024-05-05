import { TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated, ScrollView } from 'react-native';

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

    const data = [
        { id: '1', text: 'FUERZA', screen: 'Start' },
        { id: '2', text: 'HIPERTROFIA', screen: 'Start' },
        { id: '3', text: 'EJERCICIO'},
    ];

    const handleNavigation = (screenName) => {
        navigation.navigate(screenName);
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
                onPress={() => handleNavigation(item.screen)} // Navega a la pantalla indicada
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

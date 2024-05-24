import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import colors from "../styles/colores";
import { Icon } from '@rneui/themed';
import { FastBackwardOutlined } from '@ant-design/icons';

const BackComponet = ({ navigation }) => {

    const handleBack = () => {
        navigation.goBack(null);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleBack}>
                <Icon
                    name='arrow-back'
                    color='#fff'
                    size={25} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    BarraBack: {
        backgroundColor: colors.GradientHome,
    },
    container: {
        paddingHorizontal:10,
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors.Primaryblue,
    },
});

export default BackComponet;
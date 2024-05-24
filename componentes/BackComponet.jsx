import React from "react";
import { TouchableOpacity,View,StyleSheet,Text } from "react-native";
import colors from "../styles/colores";

const BackComponet = ({navigation}) => {

    const handleBack = () => {
        navigation.goBack(null);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleBack}>
                <Text>regresar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    BarraBack: {
        backgroundColor: colors.GradientHome,
    },
    container: {
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor:colors.GradientStart,
    },
});

export default BackComponet;
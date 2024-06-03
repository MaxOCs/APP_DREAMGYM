import { useNavigation } from '@react-navigation/native';
import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');



const LottieAnimations = ({navigation,route}) => {

    const nombre = route.params.nombreUsuario;

    const handleHome = () => { //areglar esto!!!!!!
        navigation.navigate('Principal', { screen: 'Inicio',params:{nombreUsuario:nombre}});
    }

    return (
        <View style={styles.contenedor}>
            <Onboarding
                onDone = {handleHome}
                containerStyles={{ paddingHorizontal: 15 }}
                pages={[
                    {
                        backgroundColor: '#32C76F',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView style={{flex:1}}
                                    source={require('../assets/animations/PersonasGrandes.json')} 
                                    autoPlay 
                                    loop 
                                />
                            </View>
                        ),
                        title: 'Bienvenido',
                        subtitle: 'Felicidades, nos alegra tenerte con nosotros!',
                    },
                    {
                        backgroundColor: '#E84DE1',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView style={{flex:1}}
                                    source={require('../assets/animations/AnimationMujer.json')} 
                                    autoPlay 
                                    loop 
                                />
                            </View>
                        ),
                        title: 'Empecemos',
                        subtitle: 'Recuerda que podrás registrar tu Historial en el apartado de IMC',
                    },
                    {
                        backgroundColor: '#4DB7E8',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView style={{flex:1}}
                                    source={require('../assets/animations/pesaCargando.json')} 
                                    autoPlay 
                                    loop 
                                />
                            </View>
                        ),
                        title: 'Niveles',
                        subtitle: 'Selecciona el nivel de ejercicio que creas ideal para ti',
                    },
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: 'white'
    },
    lottie: {
        height: 300,
        aspectRatio:1
    }
});

export default LottieAnimations;

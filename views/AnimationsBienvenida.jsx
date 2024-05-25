import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');

const LottieAnimations = () => {
    return (
        <View style={styles.contenedor}>
            <Onboarding
                containerStyles={{ paddingHorizontal: 15 }}
                pages={[
                    {
                        backgroundColor: '#fff',
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
                        backgroundColor: '#fff',
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
                        backgroundColor: '#fff',
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

import React from "react";
import {View,Text,StyleSheet,Image } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';

const LottieAnimations = () =>  {
    return(
        <View style={styles.contenedor}>
        <Onboarding
           containerStyles={{paddingHorizonal:15}}
            pages={[
                {
                    backgroundColor: '#fff',
                    image: (<View>
                        <Text>Hola chabalos</Text>
                    </View>),
                    title: 'Bienvenido',
                    subtitle: 'Nos alegra tenerte con nosotros y cuidar de ti',
                  },
                  {
                    backgroundColor: '#fff',
                    image: (<View>
                        <Text>Hola chabalos 2</Text>
                    </View>),
                    title: 'Empecemos',
                    subtitle: 'Recuerda que podras registar tu Historial en el apartado de IMC',
                  },

            ]}
        />
    </View>
    )
    
}

const styles = StyleSheet.create({
    contenedor:{
        flex:1,
        backgroundColor:'white'
    }
})

export default LottieAnimations;
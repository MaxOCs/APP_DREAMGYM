import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../views/HomeScren";
import Login from "../views/Registro";
import Registro from "../views/Registro";
import Inicio from "../views/Inicio";
import Categorias from "../views/ViewCategorias";
import FuerzaNivel from "../views/NivelFuerza";
import HipertrofiaNivel from "../views/NivelHipertrofia";
import StartFuerzaPrin from "../views/StartFuerzaPrincipiante";
import StartFuerzaInter from "../views/StartFuerzaIntermedio";
import StartFuerzaExpert from "../views/StartFuerzaExperto";
import StartHipertrofiaPrin from "../views/StartHipertrofiaPrincipiante";
import StartHipertrofiaInter from "../views/StartHipertrofiaIntermedio";
import StartHipertrofiaExpert from "../views/StartHipertrofiaExperto";
import EjercicioPrincipianteFuerza from "../views/EjercicioPrincipianteFuerza";
import EjercicioIntermedioFuerza from "../views/EjercicioIntermedioFuerza";
import EjercicioInterExpertoFuerza from "../views/EjercicioExpertoFuerza";
import generarIMC from "../views/CrearNewIMC"

const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Bienvenido"
                component={HomeScreen}
                //options={{ title: 'Bienvenido' }}
            />
            <Stack.Screen 
                name="Registro" 
                component={Registro} 
            />
             <Stack.Screen 
                name="Principal" 
                component={Inicio} 
            />
             <Stack.Screen 
                name="Categorias" 
                component = {Categorias}
            />
             <Stack.Screen 
                name="Entrenamiento de fuerza" 
                component = {FuerzaNivel}
            />
            <Stack.Screen 
                name="Entrenamiento de hipetrofia" 
                component = {HipertrofiaNivel}
            />
            <Stack.Screen 
                name="Fuerza Principiante" 
                component = {StartFuerzaPrin}
            />
            <Stack.Screen 
                name="Fuerza intermedio" 
                component = {StartFuerzaInter}
            />
             <Stack.Screen 
                name="Fuerza experto" 
                component = {StartFuerzaExpert}
            />
                <Stack.Screen 
                name="Hipertrofia Principiante" 
                component = {StartHipertrofiaPrin}
            />
            <Stack.Screen 
                name="Hipertrofia intermedio" 
                component = {StartHipertrofiaInter}
            />
             <Stack.Screen 
                name="Hipertrofia experto" 
                component = {StartHipertrofiaExpert}
            />
             
            
               <Stack.Screen 
                name="Ejercicios Principiante Fuerza" 
                component = {EjercicioPrincipianteFuerza}
            />
             <Stack.Screen 
                name="Ejercicios Intermedio Fuerza" 
                component = {EjercicioIntermedioFuerza}
            />
            <Stack.Screen 
                name="Ejercicios Experto Fuerza" 
                component = {EjercicioInterExpertoFuerza}
            />
            <Stack.Screen 
                name="Nuevo IMC" 
                component = {generarIMC}
            />




        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  

 export default MainStack
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../views/HomeScren";
import Login from "../views/Registro";
import Registro from "../views/Registro";
import Inicio from "../views/Inicio";
import Categorias from "../views/ViewCategorias";
import FuerzaNivel from "../views/NivelFuerza";
import StartFuerzaPrin from "../views/StartFuerzaPrincipiante";
import EjercicioPrincipianteFuerza from "../views/EjercicioPrincipianteFuerza";

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
                name="Entrenamiento principiante de fuerza" 
                component = {FuerzaNivel}
            />
            <Stack.Screen 
                name="Fuerza Principiante" 
                component = {StartFuerzaPrin}
            />
               <Stack.Screen 
                name="Ejercicios Principiante Fuerza" 
                component = {EjercicioPrincipianteFuerza}
            />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  

 export default MainStack
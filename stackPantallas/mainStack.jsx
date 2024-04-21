import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../views/HomeScren";
import Login from "../views/Registro";
import Registro from "../views/Registro";
import Inicio from "../views/Inicio";

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
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  

 export default MainStack
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../views/HomeScren";
import Login from "../views/Login";

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
                name="Login" 
                component={Login} 
            />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  

 export default MainStack
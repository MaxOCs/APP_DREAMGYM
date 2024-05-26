import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../views/HomeScren";
import Login from "../views/Registro";
import Registro from "../views/Registro";
import Inicio from "../views/Inicio";
import Categorias from "../views/ViewCategorias";
import Nivel from "../views/Nivel";
import Start from "../views/Start";
import Ejercicio from "../views/Ejercicio";
import generarIMC from "../views/CrearNewIMC";
import camara from "../views/Camara";
import LottieAnimations from "../views/AnimationsBienvenida";
import marcaPasos from "../views/MarcaPasos";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import colors from "../styles/colores";


const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Perfil"
                onPress={() => {
                    // accion ir a la pantalla perfil
                }}
            />
            <DrawerItem
                label="Cerrar sesión"
                onPress={() => {
                    // Metodo para cerrar sesion
                }}
            />
        </DrawerContentScrollView>
    );
};

const InicioStack = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Inicio" component={Inicio}/>
        </Drawer.Navigator>
    );
};

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Bienvenido"
                    component={HomeScreen}
                    //options={{ title: 'Bienvenido' }}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Registro"
                    component={Registro}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Principal"
                    component={InicioStack}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Categorias"
                    component={Categorias}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    name="Start"
                    component={Start}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    name="Nivel"
                    component={Nivel}
                    options={{ headerShown: false }}
                />
                  <Stack.Screen
                    name="Ejercicio"
                    component={Ejercicio}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="IMC"
                    component={generarIMC}
                />
                <Stack.Screen
                    name="marcapasos"
                    component={marcaPasos}
                />
                <Stack.Screen
                    name="Camara"
                    component={camara}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    name="LottieAnimations"
                    component={LottieAnimations}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}



export default MainStack
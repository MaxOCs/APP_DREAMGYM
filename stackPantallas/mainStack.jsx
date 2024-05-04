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
                    name="Entrenamiento principiante de fuerza"
                    component={FuerzaNivel}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Fuerza Principiante"
                    component={StartFuerzaPrin}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Ejercicios Principiante Fuerza"
                    component={EjercicioPrincipianteFuerza}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}



export default MainStack
import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import CategoryItem from '../componentes/CategoriasItem'; // Importar el componente CategoryItem

const CategoriasView = ({ navigation }) => {

  const categories = [
    { name: 'Fuerza'},
    { name: 'Hipertrofia' },
    { name: 'Indice de masa corporal'},
    { name: 'Mi cambio fisico'},
    { name: 'Ver historial I.M.C'},

  ];

  // Función para manejar qué sucede al hacer clic en una categoría
  const handleCategoryPress = (category) => {
    console.log(`Se seleccionó la categoría: ${category.name}`);
    // Puedes navegar o realizar otras acciones
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorías Disponibles</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <CategoryItem
            category={item}
            onPress={() => handleCategoryPress(item)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default CategoriasView;

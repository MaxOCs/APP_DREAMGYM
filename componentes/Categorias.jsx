import React from "react";
import { Text, View, StyleSheet } from 'react-native';

const SeccionCategorias = ({ navigation }) => (
  <View style={styles.section}>
    <Text style={styles.categoryHeader} >Categorías</Text>
    <View style={styles.horizontalCategories}>
      <View style={styles.categoryBlock}>
        <Text style={styles.categoryText} onPress={() => navigation.navigate('Entrenamiento principiante de fuerza')}>Fuerza</Text>
      </View>
      <View style={styles.categoryBlock}>
        <Text style={styles.categoryText}>Hipertrofia</Text>
      </View>
      <View style={styles.categoryBlock}>
        <Text style={styles.categoryText} onPress={() => navigation.navigate('Categorias')}>Ver más</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  section: {
    marginVertical: 20,
  },
  categoryHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  horizontalCategories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryBlock: {
    backgroundColor: '#e0e0e0',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  categoryText: {
    fontSize: 16,
  },
});

export default SeccionCategorias;

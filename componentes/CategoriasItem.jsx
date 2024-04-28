import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CategoryItem = ({ category, onPress }) => (
  <TouchableOpacity style={styles.categoryItem} onPress={onPress}>
    <Text style={styles.categoryText}>{category.name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginVertical: 10,
  },
  categoryText: {
    fontSize: 18, // Ajustar el tamaño del texto
    color: 'black', // Color del texto
  },
});

export default CategoryItem;

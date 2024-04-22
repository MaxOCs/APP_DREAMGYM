import React from 'react';
import { Image, StyleSheet } from 'react-native';

const ImagenesComponente = ({ uri, width = 200, height = 200, style }) => {
  return (
    <Image
      source={{ uri }}
      style={[styles.image, { width, height }, style]} 
    />
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
  },
});

export default ImagenesComponente;

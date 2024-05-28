// ImagenesComponente.js
import React from 'react';
import FastImage from 'react-native-fast-image';
import { StyleSheet, View } from 'react-native';

const ImagenesGif = ({ uri, style }) => {
  return (
    <View style={[styles.container, style]}>
      <FastImage
        style={styles.image}
        source={{ uri }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImagenesGif;

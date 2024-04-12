import React from "react";
import { StyleSheet, TextInput } from "react-native";

const InputText = (props) => {
    <TextInput style = {styles.input}
        {...props}
    />
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
  });

  export default InputText
import React from "react";
import { StyleSheet } from "react-native";
import { Avatar } from '@rneui/themed';

// LEER **********
// Mi idea es que este sea todo el componente de la cabezera del usuario donde se muestre nombre, foto y asi
// se le van a pasar por parametros aunque de momento estan estaticos. 

const AvatarUser = () => {
  return (
    <Avatar
    size={48}
    rounded
    source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
   />
  );
};

const styles = StyleSheet.create({
    avatar: {
      height: 40,
      width: 300,
    },
  });

  export default AvatarUser;
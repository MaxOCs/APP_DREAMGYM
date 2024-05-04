import * as React from 'react';
import { Button, Text, View, StyleSheet} from 'react-native'; // Importa los componentes Button y Text de react-native
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context';
import MainStack from './stackPantallas/mainStack';
import { Header } from '@rneui/base';


  
function App() {
  return (
   <SafeAreaView style = {{flex:1}}>
      <MainStack/>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'},

    headerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#397af8',
      marginBottom: 20,
      width: '100%',
      paddingVertical: 15,
    },
    heading: {
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',
    },
    headerRight: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 5,
    },
    subheaderText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
  }
});
export default App;



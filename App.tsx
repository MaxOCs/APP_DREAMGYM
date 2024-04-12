import * as React from 'react';
import { Button, Text, View, StyleSheet} from 'react-native'; // Importa los componentes Button y Text de react-native
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context';
import MainStack from './stackPantallas/mainStack';



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
    alignItems: 'center',
  }
});
export default App;



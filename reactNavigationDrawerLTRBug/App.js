import React, {useState} from 'react';
import { Button,StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const HomeScreen = ({ navigation, setDrawerPosition }) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.openDrawer()}
        title="Open drawer"
      />
      <View style={{flexDirection: 'row'}}>
        <Button onPress={() => setDrawerPosition('left')} title="Set position left" />
        <Button onPress={() => setDrawerPosition('right')} title="Set position right" />
      </View>
    </View>
  );
}

const Drawer = createDrawerNavigator();

const App = () => {
  const [drawerPosition, setDrawerPosition] = useState('left')

  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerPosition={drawerPosition}
        initialRouteName="Home">
        <Drawer.Screen name="Home" component={(props) => <HomeScreen {...props} setDrawerPosition={setDrawerPosition}/>} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
})


export default App;

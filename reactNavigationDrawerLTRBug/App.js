import React, {useState} from 'react';
import { Button,StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';



const Drawer = createDrawerNavigator();

const App = () => {
  const [drawerPosition, setDrawerPosition] = useState('left')

  const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Button 
          onPress={() => {
            setDrawerPosition('right')
            navigation.openDrawer()
          }} 
          title="Create bug" 
        />
        
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerPosition={drawerPosition}
        initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
})


export default App;

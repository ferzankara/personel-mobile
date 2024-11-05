import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PersonnelList from './screens/PersonnelList';
import Mesai from './screens/Mesai';
import Home from './screens/Home'; 
import Mesaj from './screens/Mesaj';
import Duyuru from './screens/Announcment'; 

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Kapsül Teknoloji Platformu' }} 
        />
        <Stack.Screen 
          name="PersonnelList" 
          component={PersonnelList} 
          options={{ title: 'Personel Listesi' }} 
        />
        <Stack.Screen 
          name="Mesai" 
          component={Mesai} 
          options={{ title: 'Mesai Girişi' }} 
        />
        <Stack.Screen 
          name="Mesaj" 
          component={Mesaj} 
          options={{ title: 'Mesajlaşma' }} 
        />
        <Stack.Screen 
          name="Duyuru" 
          component={Duyuru} // Burayı düzeltin
          options={{ title: 'Duyuru Takvimi' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

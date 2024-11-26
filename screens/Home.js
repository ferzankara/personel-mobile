import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from '../component/style';

const Home = ({ navigation }) => {
  return (
    <ImageBackground 
      source={require('../assets/mobile-konya.png')} 
      style={styles.background} 
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Hoşgeldiniz</Text>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('PersonnelList')} 
        >
          <Text style={styles.HomebuttonText}>Mesai Girişi</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('PersonnelList', { fromMesaj: true })} 
        >
          <Text style={styles.HomebuttonText}>Mesaj</Text>
        </TouchableOpacity>

        <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('Duyuru')} 
>
  <Text style={styles.HomebuttonText}>Duyuru Takvimi</Text>
</TouchableOpacity>

      </View>
    </ImageBackground>
  );
};

export default Home;

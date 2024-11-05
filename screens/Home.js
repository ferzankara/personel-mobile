import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from '../component/style';

const Home = ({ navigation }) => {
  return (
    <ImageBackground 
      source={require('../assets/mobile-konya.png')} // Arka plan resmi
      style={styles.background} // Arka plan stilini belirtiyoruz
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Hoşgeldiniz</Text>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('PersonnelList')} // Navigate to PersonnelList directly for Mesai Girişi
        >
          <Text style={styles.HomebuttonText}>Mesai Girişi</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('PersonnelList', { fromMesaj: true })} // Pass a flag to indicate it's for messaging
        >
          <Text style={styles.HomebuttonText}>Mesaj</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Announcment')} // Navigate to DuyuruTakvimi directly
        >
          <Text style={styles.HomebuttonText}>Duyuru Takvimi</Text> 
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Home;

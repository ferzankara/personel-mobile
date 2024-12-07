import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../component/style';

const PersonnelList = ({ navigation, route }) => {
  const personelList = ['Arda Yılmaz', 'Melis Kaya','Emre Demir','Aylin Çelik','Burak Şahin'];
  const fromMesaj = route.params?.fromMesaj; 

  return (
    <View style={styles.container}>
      <Text style={styles.personnelTitle}>Personel Listesi</Text>
      <ScrollView>
        {personelList.map((personel, index) => (
          <View key={index}>
            <TouchableOpacity
              onPress={() => {
                if (fromMesaj) {
                  navigation.navigate('Mesaj', { person: { firstName: personel.split(' ')[0], lastName: personel.split(' ')[1] } });
                } else {
                  navigation.navigate('Mesai', { selectedPersonel: personel, personelList });
                }
              }}
            >
              <Text style={{ fontSize: 20, padding: 13 }}>{personel}</Text>
            </TouchableOpacity>
            {index < personelList.length - 1 && <View style={styles.separator} />}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default PersonnelList;

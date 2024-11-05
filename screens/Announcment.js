import React, { useState } from 'react';
import { View, Text, TextInput, Modal, ScrollView, TouchableOpacity, Alert } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Calendar } from 'react-native-calendars';
import styles from '../component/styles';

const Duyuru = () => {
  const [announcements, setAnnouncements] = useState({});
  const [announcement, setAnnouncement] = useState({ name: '', time: '', description: '' });
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);

  const handleChange = (name, value) => {
    setAnnouncement({ ...announcement, [name]: value });
  };

  const handleSubmit = () => {
    const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;
    if (announcement.name.length >= 3 && timePattern.test(announcement.time)) {
      const selectedDateString = selectedDate.dateString;
      const updatedAnnouncements = {
        ...announcements,
        [selectedDateString]: [
          ...(announcements[selectedDateString] || []),
          { ...announcement },
        ],
      };
      setAnnouncements(updatedAnnouncements);
      setAnnouncement({ name: '', time: '', description: '' });
      setModalVisible(false);
    } else {
      alert('Lütfen tüm alanları doğru formatta doldurunuz');
    }
  };

  const handleDeleteAnnouncement = (date, index) => {
    Alert.alert(
      "Duyuruyu Sil",
      "Bu duyuruyu silmek istediğinizden emin misiniz?",
      [
        {
          text: "Hayır",
          onPress: () => console.log("Silme işlemi iptal edildi"),
          style: "cancel"
        },
        {
          text: "Evet",
          onPress: () => {
            const dateAnnouncements = announcements[date] || [];
            const updatedAnnouncements = [
              ...dateAnnouncements.slice(0, index),
              ...dateAnnouncements.slice(index + 1),
            ];
            setAnnouncements({
              ...announcements,
              [date]: updatedAnnouncements,
            });
          }
        }
      ],
      { cancelable: false }
    );
  };

  const showTimePicker = () => {
    setTimePickerVisible(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };

  const handleTimeConfirm = (time) => {
    const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    handleChange('time', formattedTime);
    hideTimePicker();
  };

  const renderAnnouncements = (date) => {
    const dateAnnouncements = announcements[date] || [];
    return dateAnnouncements.map((a, index) => (
      <View key={index} style={styles.announcementItem}>
        <Text style={styles.announcementName}>{a.name}</Text>
        <Text style={styles.announcementTime}>{a.time}</Text>
        <Text style={styles.announcementDescription}>{a.description}</Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#3B9EC5' }]}
          onPress={() => handleDeleteAnnouncement(date, index)}
        >
          <Text style={styles.buttonText}>Sil</Text>
        </TouchableOpacity>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Duyuru Takvimi</Text>
      <Calendar
        onDayPress={(day) => {
          setSelectedDate(day);
          setModalVisible(true);
        }}
        markedDates={{
          ...Object.keys(announcements).reduce((acc, date) => {
            acc[date] = { marked: true };
            return acc;
          }, {}),
        }}
      />
      {selectedDate && (
        <ScrollView style={styles.announcementList}>
          {renderAnnouncements(selectedDate.dateString)}
        </ScrollView>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Yeni Duyuru Ekle</Text>
            <TextInput
              style={styles.input}
              placeholder="Duyuru Adı (min 3 karakter)"
              value={announcement.name}
              onChangeText={(text) => handleChange('name', text)}
            />
            <TouchableOpacity onPress={showTimePicker}>
              <TextInput
                style={styles.input}
                placeholder="Saat (HH:MM)"
                value={announcement.time}
                editable={false}
                onFocus={showTimePicker}
              />
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Açıklama"
              value={announcement.description}
              onChangeText={(text) => handleChange('description', text)}
            />
            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#3B9EC5' }]}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Duyuru Ekle</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#3B9EC5' }]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>İptal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
        is24Hour={true}
      />
    </View>
  );
};

export default Duyuru;

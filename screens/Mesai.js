import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal, ImageBackground, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../component/style';

const Mesai = ({ route }) => {
  const { selectedPersonel, personelList } = route.params;
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [gorevliAdi, setGorevliAdi] = useState(selectedPersonel);
  const [mesaiList, setMesaiList] = useState([]);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [personelModalVisible, setPersonelModalVisible] = useState(false);
  const [mesailerimModalVisible, setMesailerimModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setGorevliAdi(selectedPersonel);
  }, [selectedPersonel]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);

    if (mode === 'date') {
      setSelectedDate(currentDate.toLocaleDateString());
    } else if (mode === 'time') {
      const timeString = currentDate.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit', hour12: false });
      if (startTime === '') {
        setStartTime(timeString);
      } else {
        setEndTime(timeString);
      }
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const addMesai = () => {
    if (selectedDate && startTime && endTime && gorevliAdi) {
      setMesaiList([...mesaiList, { selectedDate, startTime, endTime, gorevliAdi }]);
      setSelectedDate('');
      setStartTime('');
      setEndTime('');
    }
  };

  const deleteMesai = (index) => {
    setMesaiList(mesaiList.filter((_, i) => i !== index));
    setEditModalVisible(false);
  };

  const editMesai = () => {
    if (selectedItem !== null) {
      const updatedList = [...mesaiList];
      updatedList[selectedItem] = { selectedDate, startTime, endTime, gorevliAdi };
      setMesaiList(updatedList);
      setEditModalVisible(false);
      setSelectedItem(null);
    }
  };

  const selectGorevli = (name) => {
    setGorevliAdi(name);
    setPersonelModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/mountain.png')} style={styles.headerBackground}>
        <Text style={styles.title}>Mesai Girişi</Text>
      </ImageBackground>
      <TouchableOpacity onPress={() => setPersonelModalVisible(true)}>
        <TextInput
          placeholder="Görevli Adı"
          style={styles.input}
          value={gorevliAdi}
          editable={false}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => showMode('date')}>
        <TextInput
          placeholder="Gün Seç"
          style={styles.input}
          value={selectedDate}
          editable={false}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => showMode('time')}>
        <TextInput
          placeholder="Başlangıç Saati"
          style={styles.input}
          value={startTime}
          editable={false}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => showMode('time')}>
        <TextInput
          placeholder="Bitiş Saati"
          style={styles.input}
          value={endTime}
          editable={false}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={addMesai}>
        <Text style={styles.buttonText}>Ekle</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setMesailerimModalVisible(true)}>
        <Text style={styles.buttonText}>Mesailerim</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          display="default"
          onChange={onChange}
        />
      )}
      <Modal
        visible={editModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setEditModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Mesai Düzenle</Text>
            <TouchableOpacity onPress={() => setPersonelModalVisible(true)}>
              <TextInput
                placeholder="Görevli Adı"
                style={styles.input}
                value={gorevliAdi}
                editable={false}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => showMode('date')}>
              <TextInput
                placeholder="Gün Seç"
                style={styles.input}
                value={selectedDate}
                editable={false}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => showMode('time')}>
              <TextInput
                placeholder="Başlangıç Saati"
                style={styles.input}
                value={startTime}
                editable={false}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => showMode('time')}>
              <TextInput
                placeholder="Bitiş Saati"
                style={styles.input}
                value={endTime}
                editable={false}
              />
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.modalButton, styles.saveButton]} onPress={editMesai}>
                <Text style={styles.modalButtonText}>Kaydet</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalButton, styles.deleteButton]} onPress={() => deleteMesai(selectedItem)}>
                <Text style={styles.modalButtonText}>Sil</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalButton, styles.cancelButton]} onPress={() => setEditModalVisible(false)}>
                <Text style={styles.modalButtonText}>İptal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        visible={personelModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setPersonelModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Görevli Seç</Text>
            <ScrollView style={styles.scrollView}>
              {personelList.map((personel, index) => (
                <TouchableOpacity key={index} onPress={() => selectGorevli(personel)}>
                  <Text style={{ fontSize: 13, padding: 10 }}>{personel}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity style={[styles.modalButton, styles.cancelButton]} onPress={() => setPersonelModalVisible(false)}>
              <Text style={styles.modalButtonText}>İptal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        visible={mesailerimModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setMesailerimModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Mesailerim</Text>
            <ScrollView style={styles.scrollView}>
              {mesaiList.map((mesai, index) => (
                <TouchableOpacity key={index} onPress={() => {
                  setSelectedItem(index);
                  setSelectedDate(mesai.selectedDate);
                  setStartTime(mesai.startTime);
                  setEndTime(mesai.endTime);
                  setGorevliAdi(mesai.gorevliAdi);
                  setEditModalVisible(true);
                }}>
                  <View style={styles.tableRow}>
                    <Text style={[styles.tableRowText, styles.tableRowTextFirst]}>{mesai.selectedDate}</Text>
                    <Text style={styles.tableRowText}>{mesai.startTime}</Text>
                    <Text style={styles.tableRowText}>{mesai.endTime}</Text>
                    <Text style={[styles.tableRowText, styles.tableRowTextLast]}>{mesai.gorevliAdi}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity style={[styles.modalButton, styles.cancelButton]} onPress={() => setMesailerimModalVisible(false)}>
              <Text style={styles.modalButtonText}>Kapat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Mesai;

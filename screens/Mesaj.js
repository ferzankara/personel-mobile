import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import styles from '../component/style1'; // Ensure this path is correct

const Mesaj = ({ route }) => {
  // Check if route.params exists and provide a default value for person if not
  const person = route?.params?.person || { firstName: 'Unknown', lastName: 'User' };

  // State to manage the current message input and list of messages
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  // Function to handle sending messages
  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { id: Date.now().toString(), text: message, sender: 'you' }]);
      setMessage(''); // Clear the input after sending
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/mobile-konya.png')} style={styles.backgroundImage}>
        <Text style={styles.header}>{person.firstName} {person.lastName} ile Mesajlaşma</Text>
        
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={item.sender === 'you' ? styles.messageSent : styles.messageReceived}>
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          )}
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
        />
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={message}
            onChangeText={setMessage}
            placeholder="Mesajınızı yazın..."
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Text style={styles.sendButtonText}>Gönder</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Mesaj;

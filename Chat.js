import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView
} from 'react-native';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const flatListRef = useRef(null);

  const sendMessage = () => {
    if (inputText.trim() === '') return;

    const newMessages = [...messages, { id: Date.now().toString(), text: inputText, sender: 'user' }];
    setMessages(newMessages);
    setInputText('');

    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now().toString(), text: 'Hola', sender: 'bot' }]);
    }, 500);
  };

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}
        keyboardVerticalOffset={100}
      >

        {/* Lista de mensajes */}
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.message,
                item.sender === 'user' ? styles.userMessage : styles.botMessage
              ]}
            >
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          )}
          contentContainerStyle={{ padding: 10, flexGrow: 1, justifyContent: 'flex-end' }}
        />

        {/* Barra de entrada de texto */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Pregunta lo que quieras"
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Text style={{ color: '#fff' }}>Enviar</Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#007BFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#007BFF',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff'
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8
  },
  sendButton: {
    marginLeft: 8,
    backgroundColor: '#007BFF',
    borderRadius: 4,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  message: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: '80%'
  },
  userMessage: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end'
  },
  botMessage: {
    backgroundColor: '#EEE',
    alignSelf: 'flex-start'
  },
  messageText: {
    fontSize: 16
  }
});

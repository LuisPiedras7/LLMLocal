// LLMChat.tsx
/* import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import {
  useLLM,
  LLAMA3_2_1B,
  LLAMA3_2_TOKENIZER,
  LLAMA3_2_TOKENIZER_CONFIG,
} from 'react-native-executorch';

export default function LLMChat() {
  const llama = useLLM({
    modelSource: LLAMA3_2_1B,
    tokenizerSource: LLAMA3_2_TOKENIZER,
    tokenizerConfigSource: LLAMA3_2_TOKENIZER_CONFIG,
  });

  const handleGenerate = async () => {
    const messages = [
      { role: 'system' as const, content: 'Eres un asistente útil' },
      { role: 'user' as const, content: '¿Cuál es el significado de la vida?' },
    ];
    await llama.generate(messages);
    console.log('Respuesta:', llama.response);
  };

  return (
    <View>
      <Text>Modelo listo: {llama.isReady ? '✅' : '⏳'}</Text>
      <Button title="Generar respuesta" onPress={handleGenerate} />
      <Text>Respuesta: {llama.response}</Text>
    </View>
  );
} */
import React, { useState } from 'react';
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from 'react-native';
import {
  useLLM,
  LLAMA3_2_1B,
  LLAMA3_2_TOKENIZER,
  LLAMA3_2_TOKENIZER_CONFIG,
} from 'react-native-executorch';

type Message = { role: 'system' | 'user'; content: string };

export default function LLMChat() {
  const llama = useLLM({
    modelSource: LLAMA3_2_1B,
    tokenizerSource: LLAMA3_2_TOKENIZER,
    tokenizerConfigSource: LLAMA3_2_TOKENIZER_CONFIG,
  });

  const [messages, setMessages] = useState<Message[]>([
    { role: 'system', content: 'Eres un asistente útil' },
  ]);
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user' as const, content: input }];
    setMessages(newMessages);
    setChatHistory(prev => [...prev, `🧑: ${input}`]);
    setInput('');

    await llama.generate(newMessages);
    setChatHistory(prev => [...prev, `🤖: ${llama.response}`]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.status}>
        Modelo listo: {llama.isReady ? '✅' : '⏳'}
      </Text>
      <ScrollView style={styles.chatBox}>
        {chatHistory.map((msg, index) => (
          <Text key={index} style={msg.startsWith('🧑') ? styles.userMsg : styles.botMsg}>
            {msg}
          </Text>
        ))}
      </ScrollView>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu mensaje..."
          value={input}
          onChangeText={setInput}
        />
        <Button title="Enviar" onPress={handleSend} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1, backgroundColor: '#fff' },
  status: { marginBottom: 8, fontWeight: 'bold' },
  chatBox: { flex: 1, marginBottom: 8 },
  userMsg: { alignSelf: 'flex-end', backgroundColor: '#dcf8c6', padding: 8, borderRadius: 8, marginVertical: 4 },
  botMsg: { alignSelf: 'flex-start', backgroundColor: '#f1f0f0', padding: 8, borderRadius: 8, marginVertical: 4 },
  inputRow: { flexDirection: 'row', alignItems: 'center' },
  input: { flex: 1, borderColor: '#ccc', borderWidth: 1, borderRadius: 8, paddingHorizontal: 8, marginRight: 8 },
});


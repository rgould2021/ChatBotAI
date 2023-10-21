import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type your message..."
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Send" onPress={handleSend} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
  },
});

export default ChatInput;
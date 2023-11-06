import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Message } from '../types';

interface ChatBubbleProps {
  message: Message;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const userMessageStyles = StyleSheet.create({
    container: {
      backgroundColor: '#34B7F1',
      padding: 10,
      margin: 5,
      borderRadius: 10,
      alignSelf: 'flex-end',
    },
  });

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#DCF8C6',
      padding: 10,
      margin: 5,
      borderRadius: 10,
      alignSelf: 'flex-start',
    },

    timestamp: {
      fontSize: 12,
      color: 'gray',
      marginTop: 5,
    },
  });

  return (
    <View style={message.role === 'user' ? userMessageStyles.container : styles.container}>
      <Text>{message.content}</Text>
      <Text style={styles.timestamp}>{new Date(message.timestamp).toLocaleTimeString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2986cc',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  timestamp: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
});
export default ChatBubble;

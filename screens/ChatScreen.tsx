import React, { useState } from 'react';
import OpenAI from 'openai';
import { View, FlatList, StyleSheet } from 'react-native';
import ChatBubble from '../components/ChatBubble';
import ChatInput from '../components/ChatInput';
import { Message } from '../types';

const initialMessages: Message[] = [
  { id: 1, content: 'Hi!', timestamp: Date.now() - 5000, role: 'chatbot' }, 
  { id: 2, content: "I'm skippy, how may I assist?", timestamp: Date.now() - 3000, role: 'chatbot'},
  // Add more initial messages as needed
];

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState(initialMessages);

  const handleSendMessage = async (messageText: string) => {
    // Display the user message immediately

    const userMessage: Message = {
      id: messages.length + 1,
      content: messageText,
      timestamp: Date.now(),
      role: 'user',
    };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    // const updatedMessages = [...messages, userMessage];
    // setMessages(updatedMessages);
    
    console.log('user msgs:', userMessage.content)
    console.log('msgs id:', userMessage.id)

    // Send user message to GPT-3 for a response
    try {
      // Initialize the OpenAI API client
      const openai = new OpenAI({
        apiKey: process.env.EXPO_PUBLIC_API_KEY, // Change this to your actual OpenAI API key
        dangerouslyAllowBrowser: true,
      });

      const payload = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: messageText,
          },
        ],
      };

      const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`, // Change this to your actual OpenAI API key
      };

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();

      const chatbotMessage: Message = {
        id: messages.length + 2,
        content: responseData.choices[0]?.message?.content || "Sorry, I couldn't understand.",
        timestamp: Date.now(),
        role: 'chatbot',
      };

      const updatedChat = [...updatedMessages, chatbotMessage];
      setMessages(updatedChat);
      
      // Add console.log
      console.log('Chatbot Response:', chatbotMessage.content);

    } catch (error) {
      if (error instanceof OpenAI.APIError) {
        console.error(error.status);
        console.error(error.headers);
        console.error(error.message);
        console.error(error.code);
        console.error(error.type);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => `${item.content}_${item.id}`}
        renderItem={({ item }) => <ChatBubble message={item} />}
      />
      <ChatInput onSendMessage={handleSendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatScreen;

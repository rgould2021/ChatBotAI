import React, { useState } from 'react';
import { OPENAI_SECRET_KEY }from '@env';
import OpenAI from 'openai';
import { View, FlatList, StyleSheet } from 'react-native';
import ChatBubble from '../components/ChatBubble';
import ChatInput from '../components/ChatInput';
import { Message } from '../types';


const initialMessages: Message[] = [
  { id: 1, content: 'Hello!', timestamp: Date.now() - 5000 },
  { id: 2, content: 'How are you?', timestamp: Date.now() - 3000 },
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
    };
    setMessages([...messages, userMessage]);

    // Send user message to GPT-3 for a response
    try {

      // Initialize the OpenAI API client
      const openai = new OpenAI({
        apiKey: process.env["OPENAI_API_KEY"], // defaults to process.env["OPENAI_API_KEY"]
      });

      // const response = await openai.chat.completions.create({
      //   model: "gpt-3.5-turbo",
      //   messages: [{role: "user", content: "Hello!"}],
      // });
      // console.log("HELLO!",response.choices[0].message);

      const response = await openai.chat.completions.create({
        messages: [{role: "user", content: messageText}],
        model: "gpt-3.5-turbo",
      });

      const chatbotMessage: Message = {
        id: messages.length + 2,
        content: response.choices[0]?.message.content || 'Sorry, I couldn\'t understand.',
        timestamp: Date.now(),
      };

      setMessages([...messages, chatbotMessage]);
    } catch (error) {
      if (error instanceof OpenAI.APIError) {
        console.error(error.status);  // e.g. 401
        console.error(error.headers);
        console.error(error.message); // e.g. The authentication token you passed was invalid...
        console.error(error.code);  // e.g. 'invalid_api_key'
        console.error(error.type);  // e.g. 'invalid_request_error'
      } else {
        // Non-API error
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
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

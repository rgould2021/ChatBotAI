export interface Message {
    id: number;
    content: string;
    timestamp: number;
    role: 'usr' | 'chatbot'; // Add the 'role' property
  }
  
  export interface Chat {
    id: number;
    name: string;
    messages: Message[];
    role: 'user' | 'chatbot';
  }
  
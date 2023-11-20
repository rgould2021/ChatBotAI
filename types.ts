export interface Message {
    id: number;
    content: string;
    timestamp: number;
    role: 'user' | 'chatbot'; 
}
  
  export interface Chat {
    id: number;
    name: string;
    messages: Message[];
    role: 'user' | 'chatbot';
  }
  
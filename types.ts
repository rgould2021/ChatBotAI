export interface Message {
    id: number;
    content: string;
    timestamp: number;
  }
  
  export interface Chat {
    id: number;
    name: string;
    messages: Message[];
  }
  
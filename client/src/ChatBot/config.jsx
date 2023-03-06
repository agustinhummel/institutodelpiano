import { createChatBotMessage } from 'react-chatbot-kit';
import MyAvatar from './MyAvatar';

const botName = 'Intituto Delpiano';


const config = {
  initialMessages: [
    createChatBotMessage(`Hola! somos el ${botName}, Estoy aquí para ayudarte.`),
    createChatBotMessage(
      "¿Cuál es tu consulta?",
      {
        withAvatar: true,
        delay: 500,
        widget: "overview",
      }
    ),
  ],

  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#001099',
    },
    chatButton: {
      backgroundColor: '#001099',
    },

  },
};

export default config;


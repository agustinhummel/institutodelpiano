import { createChatBotMessage } from 'react-chatbot-kit';
import ObraSocial from './ObraSocial';
import ServiciosChat from './ServiciosChat';

const botName = 'Intituto Delpiano';


const config = {

  initialMessages: [
    createChatBotMessage(`Hola! somos el ${botName}.`),
    createChatBotMessage(
      "¿Cuál es tu consulta?",
      {
        withAvatar: true,
        delay: 500,
      }
    ),
  ],
  state: {
    servicios: [],
    obrasSociales:[]
  },
  widgets: [
    {
      widgetName: 'serviciosChat',
      widgetFunc: (props) => <ServiciosChat {...props} />,
      mapStateToProps: ['servicios'],
    },
    {
      widgetName: 'obraSocial',
      widgetFunc: (props) => <ObraSocial {...props} />,
      mapStateToProps: ['obrasSociales'],
    },
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


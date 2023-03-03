import React, {useState} from 'react'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './config.jsx';
import MessageParser from './MessageParser.jsx';
import ActionProvider from './ActionProvider.jsx';

const ChatBot = () => {

  const [showBot, toggleBot] = useState(false);
  

  return (

      <div>
        <div className='flex justify-end fixed right-12 bottom-20 z-10' >
          {showBot && (
            <Chatbot 
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
              headerText='Conversa con el Instituto Delpiano'
              placeholderText='Escriba su consulta aqui...'
              disableScrollToBottom
            />
          )}
          </div>
          <div className='flex justify-end ' >
            <button className='w-12 h-12 text-2xl m-2 p-1 rounded-full bg-options-color fixed right-5 bottom-5' onClick={() => toggleBot((prev) => !prev)}><ion-icon  name={showBot ? 'close': 'mail-outline' }></ion-icon></button> 
        </div>
      </div>


  )
}


export default ChatBot;
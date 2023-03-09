import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {

    if (message.toLowerCase().includes('hola')) {
      actions.handleHello();
    }
    else if (message.toLowerCase().includes('horario')) {
      actions.handleHorario();
    }
    else if (message.toLowerCase().includes('servicios')) {
      actions.handleServicios();
    }
    else if (message.toLowerCase().includes('obra social')) {
      actions.handleObraSocial();
    }
    else if (message.toLowerCase().includes('obras sociales')) {
      actions.handleObraSocial();
    }
    else if (message.toLowerCase().includes('muchas gracias')) {
      actions.handleSaludo();
    }
    else if (message.length === 0){
      actions.handleError();
    }
    else {
      actions.handleError();
    }
  
  };


  

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
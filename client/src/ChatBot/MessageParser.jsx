import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('Hola')) {
      actions.handleHello();
    }
    if (message.includes('Horario')) {
      actions.handleHorario();
    }
    if (message.includes('Servicios')) {
      actions.handleServicios();
    }
    if (message.includes('Muchas gracias')) {
      actions.handleSaludo();
    }
    else if (message.length === 0){
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
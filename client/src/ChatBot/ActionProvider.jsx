import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const handleHello = () => {
    const botMessage = createChatBotMessage('Hola. Mucho gusto.');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleHorario = () => {
    const botMessage = createChatBotMessage('Horarios: Lu a Vi: 7:00hs a 21:00hs');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  // const handleServicios = () => {
  //   const botMessage = createChatBotMessage('Servicios: Kinesiologia, Hidroterapia, Gimnasio');
  //   setState((prev) => ({
  //     ...prev,
  //     messages: [...prev.messages, botMessage],
  //   }));
  // };
  const handleServicios = () => {
    const botMessage = createChatBotMessage(
      "Aqui tienes nuestros servicios!",
      {
        widget: 'serviciosChat',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleSaludo = () => {
    const botMessage = createChatBotMessage('De nada! ¡Para lo que necesites!');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleError = () => {
    const botMessage = createChatBotMessage('Perdón , soy un robot y no logro entender :(');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleHorario,
            handleServicios,
            handleSaludo,
            handleError
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
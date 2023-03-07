import React from 'react';
import { useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
const SeviciosChat = (props) => {

  const {setState} = props;

  const services = useSelector (state => state.services)

  if(services != props.state.servicios){
      setState((state) => ({...state, servicios:services}))
  }


  const renderService = () => {
    return props.servicios.map((serv, i) => {
      return (
        <Link to={`services/${serv.id}`}  key={i}>
          <li className='text-white text-sm border-2 border-options-color items-center rounded-xl bg-option1-color my-2 w-full'>{serv.name.charAt(0).toUpperCase() + serv.name.toLowerCase().slice(1)}</li>
        </Link>
      )
    })
  }

  return (
    <div>
      <button >{renderService()}</button>
    </div>
  );
};

export default SeviciosChat;
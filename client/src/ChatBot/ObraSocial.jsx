import React from 'react';
import { useSelector} from 'react-redux';

const ObraSocial = (props) => {

  const {setState} = props;

  const obras = useSelector (state => state.obraSocials)

  if(obras != props.state.obrasSociales){
      setState((state) => ({...state, obrasSociales:obras}))
  }

  

  const renderObras = () => {
    return props.obrasSociales.map((o, i) => {
      return (
        
          <li  key={i} className='list-none text-white text-sm border-2 border-options-color items-center rounded-xl bg-option1-color my-2 w-full p-2'>{o.name.charAt(0).toUpperCase() + o.name.toLowerCase().slice(1)}</li>

      )
    })
  }

  return (
    <div>
      <button >{renderObras()}</button>
    </div>
  );
};

export default ObraSocial;
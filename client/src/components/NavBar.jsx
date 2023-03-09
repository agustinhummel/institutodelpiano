import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logoGif.gif'
import DropdownComponent from './Dropdown';
import { useSelector, useDispatch } from 'react-redux';
import { LogOut } from '../redux/actions';
import {alert} from '../functions'
import { useJwt } from "react-jwt";


const NavBar = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  let [open, setOpen] = useState(false)
  const { decodedToken, isExpired } = useJwt(user);

  return (
    <nav className='z-10 shadow-md w-screen  fixed  top-0 left-0 font-serif'>
      <div className='md:flex items-center justify-between bg-options-color min-h-[10vh] py-4 md:px-10 px-7'>
          <div className='text-2xl select-none cursor-default flex items-center gap-3 '>
            <img className='h-16 w-16' src={logo} alt='logoEmpresa' />
            <div>
              <h1 className='hidden text-option1-color text-3xl font-bold lg:flex'>Instituto Delpiano</h1>
              <p className='text-xl text-option1-color font-cursiva italic hidden lg:flex'>"Un lugar para sentirse bien..."</p>
            </div>

          </div>
          <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-8 cursor-pointer md:hidden z-[11]'>
          <ion-icon name={open ? 'close': 'menu' }></ion-icon>
          </div>
            <ul className={`md:flex md:items-center md:pb-0 h-screen md:h-full absolute md:static bg-options-color  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100 z-10':'top-[-490px] hidden md:z-auto'} md:opacity-100 opacity-0`}>
              <li className='md:ml-8 text-lg md:my-0 my-7 text-option1-color hover:text-sky-200 cursor-pointer duration-500' onClick={()=>setOpen(!open)}>
                <Link to='/'>
                  Inicio
                </Link>
              </li>
              <li className='md:ml-8 text-lg md:my-0 my-7 text-option1-color hover:text-sky-200 cursor-pointer duration-500'>
                <DropdownComponent setOpen={setOpen} open={open}/>
                </li>
              <li className='md:ml-8 text-lg md:my-0 my-7 text-option1-color hover:text-sky-200 cursor-pointer duration-500' onClick={()=>setOpen(!open)}>
                <Link to='/about'>
                  Nosotros
                </Link>
              </li>
              <li className='md:ml-8 text-lg md:my-0 my-7 text-option1-color hover:text-sky-200 cursor-pointer duration-500' onClick={()=>setOpen(!open)}>
                <Link to='/posts'>
                  Blog
                </Link>
              </li>
              <li className='md:ml-8 text-lg md:my-0 my-7 text-option1-color hover:text-sky-200 cursor-pointer duration-500' onClick={()=>setOpen(!open)}>
                <Link to='/opening'>
                  Vacantes
                </Link>
              </li>
              {decodedToken !=null && !isExpired ?<li className='md:ml-8 text-lg md:my-0 my-7 text-option1-color hover:text-sky-200 cursor-pointer duration-500' onClick={()=>setOpen(!open)}>
                  <Link to='/admin'>
                    Admin
                  </Link>
                </li> 
                :null}
              {decodedToken !=null && !isExpired   
                ?<li className='md:ml-8 text-lg md:my-0 my-7    text-option1-color hover:text-sky-200 cursor-pointer duration-500' onClick={()=>{dispatch(LogOut());
                  setOpen(!open); alert("Cerrar Sesion","Salida Exitosa")} }>
                <Link to='/'>
                  Cerrar Sesion
                </Link>
                </li>
                :<li className='md:ml-8 text-lg md:my-0 my-7 text-option1-color hover:text-sky-200 cursor-pointer duration-500' onClick={()=>setOpen(!open)}>
                  <Link to='/login'>
                    Inicio de Sesion
                  </Link>
                </li> }
            </ul>
            </div>
         </nav>


  )
}

export default NavBar;


{/* {
Links.map((link, i)=>(
<li key={i} className='md:ml-8 text-lg md:my-0 my-7' >
<a href={link.link} className='text-option1-color hover:text-sky-200 duration-500'>{link.name}</a>
</li>
))
<button className='bg-emerald-500 text-white flex items-center cursor-pointer duration-500 px-6 py-2 mx-4 hover:bg-green-400 rounded'><ion-icon  name="logo-whatsapp" ></ion-icon>Turno Online</button>
}  */}
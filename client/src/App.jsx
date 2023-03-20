import axios from 'axios';
import { Link } from 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Home from "./Pages/Home.jsx"
import NavBar from './components/NavBar';
import Login from './Pages/Login';
import About from './Pages/About';
import Blog from './Pages/Blog';
import AdminPage from './AdminPage/Admin.jsx';
import Protected from './components/Protected';
import ProtectedAdmin from './components/ProtectedAdmin';
import CreateProfessional from './adminPage/CreateProfessional.jsx';
import CreatePost from './AdminPage/CreatePost.jsx';
import CreateService from './adminPage/CreateService.jsx';
import CreateUser from './adminPage/CreateUser.jsx';
import CreateOpening from './AdminPage/CreateOpening.jsx';
import CreateObraSocial from './AdminPage/CreateObraSocial.jsx';
import CreateEvent from './AdminPage/CreateEvent.jsx';
import EditProfessional from './adminPage/EditProfessional';
import EditUser from './adminPage/EditUser.jsx';
import EditService from './adminPage/EditService.jsx';
import EditPost from './AdminPage/EditPost';
import EditOpening from './AdminPage/EditOpening';
import EditObraSocial from './AdminPage/EditObraSocial.jsx';
import PostDetail from './Pages/PostDetail.jsx';
import ServiceDetail from './Pages/ServiceDetail.jsx';
import Vacante from './Pages/Vacante.jsx';
import EditEvent from './AdminPage/EditEvent.jsx';


function App() {



  return (
    <BrowserRouter>
      <NavBar/> 
        <Routes>
          <Route exact path='/' element={<Home/>} />  
          <Route exact path='login' element={<Login/>} /> 
          <Route exact path='about' element={<About/>} /> 
          <Route exact path='posts' element={<Blog/>} /> 
          <Route exact path='posts/:postId' element={<PostDetail/>} /> 
          <Route exact path='services/:serviceId' element={<ServiceDetail/>}/> 
          <Route exact path='opening' element={<Vacante/>} /> 
          <Route exact path='admin' element={<Protected><AdminPage/></Protected> }/>
          <Route exact path='admin/createopening' element={<ProtectedAdmin><CreateOpening/></ProtectedAdmin>}/>
          <Route exact path='admin/editopening/:openingId' element={<ProtectedAdmin><EditOpening/></ProtectedAdmin>}/>
          <Route exact path='admin/createprofessional' element={<ProtectedAdmin><CreateProfessional/></ProtectedAdmin>}/>   
          <Route exact path='admin/createpost' element={<Protected><CreatePost/></Protected>}/>   
          <Route exact path='admin/createservice' element={<ProtectedAdmin><CreateService/></ProtectedAdmin>}/>   
          <Route exact path='admin/createuser' element={<ProtectedAdmin><CreateUser/></ProtectedAdmin>}/>   
          <Route exact path='admin/createobrasocial' element={<ProtectedAdmin><CreateObraSocial/></ProtectedAdmin>}/>  
          <Route exact path='admin/createevent' element={<ProtectedAdmin><CreateEvent/></ProtectedAdmin>}/>  
          <Route exact path='admin/editevent/:eventId' element={<ProtectedAdmin><EditEvent/></ProtectedAdmin>}/>  
          <Route exact path='admin/editprofessional/:professionalId' element={<ProtectedAdmin><EditProfessional/></ProtectedAdmin>}/>   
          <Route exact path='admin/edituser/:userId' element={<ProtectedAdmin><EditUser/></ProtectedAdmin>}/>   
          <Route exact path='admin/editservice/:serviceId' element={<ProtectedAdmin><EditService/></ProtectedAdmin>}/>   
          <Route exact path='admin/editpost/:postId' element={<Protected><EditPost/></Protected>}/> 
          <Route exact path='admin/editobrasocial/:obraSocialId' element={<Protected><EditObraSocial/></Protected>}/>    
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
     <Footer/> 
  </BrowserRouter>
  )
}

export default App


const NotFoundPage = () => {
  return (
    <section className="flex items-center h-screen p-16  dark:text-dark-color">
		<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
			<div className="max-w-md text-center">
				<h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
					<span className="sr-only">Error</span>404
				</h2>
				<p className="text-2xl font-semibold md:text-3xl">Lo Siento, No hemos podido encontrar esta pagina</p>
				<p className="mt-4 mb-8 dark:text-gray-400">Pero no te preocupes, puedes encontrar muchas otras cosas en nuestro inicio </p>
				<Link to={'/'} className="px-8 py-3 font-semibold rounded bg-main-color text-dark-color">Volver a Inicio</Link>
			</div>
		</div>
	</section>
  )
}

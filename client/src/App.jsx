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
import NotFound from './pages/NotFound.jsx';
import CreateProfessional from './adminPage/CreateProfessional.jsx';
import CreatePost from './AdminPage/CreatePost.jsx';
import CreateService from './adminPage/CreateService.jsx';
import CreateUser from './adminPage/CreateUser.jsx';
import CreateOpening from './AdminPage/CreateOpening.jsx';
import EditProfessional from './adminPage/EditProfessional';
import EditUser from './adminPage/EditUser.jsx';
import EditService from './adminPage/EditService.jsx';
import EditPost from './AdminPage/EditPost';
import EditOpening from './AdminPage/EditOpening';
import PostDetail from './Pages/PostDetail.jsx';
import ServiceDetail from './Pages/ServiceDetail.jsx';
import Vacante from './Pages/Vacante.jsx';


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
          <Route exact path='admin/editprofessional/:professionalId' element={<ProtectedAdmin><EditProfessional/></ProtectedAdmin>}/>   
          <Route exact path='admin/edituser/:userId' element={<ProtectedAdmin><EditUser/></ProtectedAdmin>}/>   
          <Route exact path='admin/editservice/:serviceId' element={<ProtectedAdmin><EditService/></ProtectedAdmin>}/>   
          <Route exact path='admin/editpost/:postId' element={<Protected><EditPost/></Protected>}/>   
          <Route path="*" element={<NotFound/>}/>
        </Routes>
     <Footer/> 
  </BrowserRouter>
  )
}

export default App

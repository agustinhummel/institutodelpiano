import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Home from "./Pages/Home.jsx"
import NavBar from './components/NavBar';
import Login from './Pages/Login';
import About from './Pages/About';
import Blog from './Pages/Blog';
import AdminPage from './AdminPage/Admin.jsx';
import Protected from './components/Protected';
import NotFound from './pages/NotFound.jsx';
import CreateProfessional from './adminPage/create/CreateProfessional.jsx';
import CreatePost from './adminPage/create/CreatePost.jsx';
import CreateService from './adminPage/create/CreateService.jsx';
import CreateUser from './adminPage/create/CreateUser.jsx';
import EditProfessional from './adminPage/edit/EditProfessional';
import EditUser from './adminPage/edit/EditUser.jsx';
import EditService from './adminPage/edit/EditService.jsx';
import EditPost from './adminPage/edit/EditPost';

function App() {
  return (
    <BrowserRouter>
      <NavBar/> 
        <Routes>
          <Route exact path='/' element={<Home/>} /> 
          <Route exact path='login' element={<Login/>} /> 
          <Route exact path='about' element={<About/>} /> 
          <Route exact path='blog' element={<Blog/>} /> 
          <Route exact path='admin' element={<Protected><AdminPage/></Protected> }/>
          <Route exact path='admin/createprofessional' element={<Protected><CreateProfessional/></Protected>}/>   
          <Route exact path='admin/createpost' element={<Protected><CreatePost/></Protected>}/>   
          <Route exact path='admin/createservice' element={<Protected><CreateService/></Protected>}/>   
          <Route exact path='admin/createuser' element={<Protected><CreateUser/></Protected>}/>   
          <Route exact path='admin/editprofessional/:professionalId' element={<Protected><EditProfessional/></Protected>}/>   
          <Route exact path='admin/edituser/:userId' element={<Protected><EditUser/></Protected>}/>   
          <Route exact path='admin/editservice/:serviceId' element={<Protected><EditService/></Protected>}/>   
          <Route exact path='admin/editpost/:postId' element={<Protected><EditPost/></Protected>}/>   
          <Route path="*" element={<NotFound/>}/>
        </Routes>
     <Footer/> 
  </BrowserRouter>
  )
}

export default App

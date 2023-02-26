import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Home from "./Pages/Home.jsx"
import NavBar from './components/NavBar';
import Login from './Pages/Login';
import About from './Pages/About';
import Blog from './Pages/Blog';
import AdminPage from './AdminPage/Admin.jsx';
import ProteccionRoutes from './components/proteccionRoutes';

function App() {
  return (
    <BrowserRouter>
      <NavBar/> 
        <Routes>
          <Route exact path='/' element={<Home/>} /> 
          <Route exact path='/login' element={<Login/>} /> 
          <Route exact path='/about' element={<About/>} /> 
          <Route exact path='/blog' element={<Blog/>} /> 
          <Route exact path='/admin' 
            element={
              <ProteccionRoutes>
                <AdminPage/>
              </ProteccionRoutes> }/>
          <Route exact path='/admin' 
            element={
              <ProteccionRoutes>
                <AdminPage/>
              </ProteccionRoutes> }/>
          <Route exact path='/admin' 
            element={
              <ProteccionRoutes>
                <AdminPage/>
              </ProteccionRoutes> }/>
          <Route exact path='/admin' 
            element={
              <ProteccionRoutes>
                <AdminPage/>
              </ProteccionRoutes> }/>
          <Route exact path='/admin' 
            element={
              <ProteccionRoutes>
                <AdminPage/>
              </ProteccionRoutes> }/>
        </Routes>
     <Footer/> 
  </BrowserRouter>
  )
}

export default App

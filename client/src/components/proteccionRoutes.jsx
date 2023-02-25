import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';


export default function ProteccionRoutes({children}){
    const navigate = useNavigate()
    const user = useSelector(state => state.user)
    if(user){
        return children
    }else{
        navigate('/')
        return<>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique fugiat necessitatibus sunt excepturi quisquam. Eius quo, odit dolorum iste, minima eum consequatur nostrum sapiente commodi possimus placeat reiciendis praesentium aspernatur.</>
    }   
}
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';


export default function ProteccionRoutes({children}){
    const navigate = useNavigate()
    const user = useSelector(state => state.user)
    if(user){
        return children
    }else{
        navigate('/')
        return<>NOT ALLOWED</>
    }   
}
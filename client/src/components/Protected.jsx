import { useSelector } from 'react-redux';
import NotFound from '../Pages/NotFound404';
import { useJwt } from "react-jwt";

export default function Protected({children}){
    const user = useSelector(state => state.user)   
    const { decodedToken, isExpired } = useJwt(user);
    if(decodedToken !=null && !isExpired){
        return children
    }else{
        return <NotFound/>
    }   
}
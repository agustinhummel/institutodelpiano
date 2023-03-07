import { useSelector } from 'react-redux';
import NotFound from '../pages/NotFound';
import { useJwt } from "react-jwt";

export default function Protected({children}){
    const user = useSelector(state => state.user)   
    const { decodedToken, isExpired } = useJwt(user);
    if(decodedToken !=null && !isExpired &&decodedToken.level ===2){
        return children
    }else{
        return <NotFound/>
    }   
}
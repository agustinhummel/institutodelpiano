import { useSelector } from 'react-redux';
import { useJwt } from "react-jwt";
import NotFoundPage from '../Pages/NotFound404';

export default function Protected({children}){

    const user = useSelector(state => state.user)  

    const { decodedToken, isExpired } = useJwt(user);

    if(decodedToken !=null && !isExpired &&decodedToken.level === 2){
        return children
    }else{
        return <NotFoundPage/>
    }   
}
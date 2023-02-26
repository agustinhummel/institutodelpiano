import { useSelector } from 'react-redux';
import NotFound from '../pages/NotFound';


export default function Protected({children}){
    const user = useSelector(state => state.user)
    if(user){
        return children
    }else{
        return <NotFound/>
    }   
}
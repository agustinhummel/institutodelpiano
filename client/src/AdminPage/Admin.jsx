
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../components/Sidebar"
import UserAdmin from '../AdminPage/UserAdmin'
import ProfessionalAdmin from '../AdminPage/ProfessionalAdmin'
import ServiceAdmin from '../AdminPage/ServiceAdmin'
import PostAdmin from './PostAdmin'
import OpeningAdmin from "./OpeningAdmin";
import { useEffect } from 'react';
import { getAllPosts, getAllProfessionals, getAllServices, getAllUsers, getAllOpenings } from "../redux/actions";
import { useJwt } from "react-jwt";

export default function AdminPage() {

    const user = useSelector(state => state.user)
    const { decodedToken, isExpired } = useJwt(user);
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPosts());
        dispatch(getAllProfessionals());
        dispatch(getAllServices());
        dispatch(getAllUsers());
        dispatch(getAllOpenings());
      }, [dispatch]);


    const adminListState = useSelector(state => state.adminList)
    return (
        <div className="admin pt-24 flex">
            <Sidebar />
            <div className="adminContainer flex-[6]">
                <div className="selected-component">
                     {
                     adminListState === 'opening' && decodedToken?.level===2 && !isExpired ?  <OpeningAdmin /> :
                        adminListState === 'user' && decodedToken?.level===2 && !isExpired?  <UserAdmin/> :
                            adminListState === 'service'  && decodedToken?.level===2 && !isExpired ? <ServiceAdmin /> :
                                adminListState === 'professional'  && decodedToken?.level===2 && !isExpired ? <ProfessionalAdmin /> :
                                <PostAdmin />} 
                </div>
                <div className="listContainer">
                    <div className="listTitle"></div>
                </div>
            </div>
        </div>
    )
}
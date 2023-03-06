
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../components/Sidebar"
import UserAdmin from '../AdminPage/UserAdmin'
import ProfessionalAdmin from '../AdminPage/ProfessionalAdmin'
import ServiceAdmin from '../AdminPage/ServiceAdmin'
import PostAdmin from './PostAdmin'
import { useEffect } from 'react';
import { getAllPosts, getAllProfessionals, getAllServices, getAllUsers } from "../redux/actions";

export default function AdminPage() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPosts());
        dispatch(getAllProfessionals());
        dispatch(getAllServices());
        dispatch(getAllUsers());
      }, [dispatch]);


    const adminListState = useSelector(state => state.adminList)
    return (
        <div className="admin pt-24 flex">
            <Sidebar />
            <div className="adminContainer flex-[6]">
                <div className="selected-component">
                     {adminListState === 'post' ?  <PostAdmin /> :
                        adminListState === 'service' ? <ServiceAdmin /> :
                            adminListState === 'professional' ? <ProfessionalAdmin /> :
                            <UserAdmin/>} 
                </div>
                <div className="listContainer">
                    <div className="listTitle"></div>
                </div>
            </div>
        </div>
    )
}
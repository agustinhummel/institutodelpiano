
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../components/Sidebar"
import UserAdmin from '../AdminPage/UserAdmin'
/* import ProductsAdmin from '../AdminPage/ProductsAdmin'
import ReviewsAdmin from '../AdminPage/ReviewsAdmin'
import CategoryAdmin from '../AdminPage/CategoryAdmin'
import TransactionAdmin from '../AdminPage/TransactionAdmin' */

export default function AdminPage() {

    
    return (
        <div className="admin pt-24 flex">
            <Sidebar />
            <div className="adminContainer flex-[6]">
                <div className="selected-component">
                    <UserAdmin></UserAdmin>
                    {/* {adminListState === 'user' ? <UserAdmin/> :
                        adminListState === 'product' ? <ProductsAdmin /> :
                            adminListState === 'review' ? <ReviewsAdmin /> :
                                adminListState === 'category' ? <CategoryAdmin /> :
                                    <TransactionAdmin />} */}
                </div>
                <div className="listContainer">
                    <div className="listTitle"></div>
                </div>
            </div>
        </div>
    )
}
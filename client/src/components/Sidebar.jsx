

import {
  ProfileOutlined,
  SmileOutlined,
  WalletOutlined,
  MenuFoldOutlined,
  UserOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate,Link } from 'react-router-dom';
import { adminList } from '../Redux/Actions/actions';


function getItem(label, key, icon, children, type) {
  
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Usuarios", "sub1", <UserOutlined />, [
    getItem("Lista de Usuarios", "user"),
    getItem("Crear Usuario", "createUser")
  ]),
  getItem("Professionales", "sub2", <WalletOutlined />, [
    getItem("Lista de Profesionales", "professional"),
    getItem("Crear Profesional", "createProfessional")
  ]),
  getItem("Servicios", "sub3", <SmileOutlined />, [
    getItem("Lista de Servicios", "service"),
    getItem("Crear Servico", "createService")
  ]),
  getItem("Posts", "sub4", <ProfileOutlined />, [
    getItem("Lista de Posts", "post"),
    getItem("Crear Post", "createPost")
  ])
];
const Slidebar = () => {
  const [collapsed, setCollapsed] = useState(window.matchMedia("(max-width: 700px)").matches );
  const toggleCollapsed = () => {
    window.matchMedia("(max-width: 768px)").matches ? null :  setCollapsed(!collapsed);

  };
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onClick = (e) => {
    if (e.key == "createUser") {
      navigate('/admin/createuser')
    }else if(e.key == 'createProfessional'){
      navigate('/admin/createprofessional')
    }else if(e.key == 'createService'){
      navigate('/admin/createservice')
    }else if(e.key == 'createPost'){
      navigate('/admin/createpost')
    }
    dispatch(adminList(e.key))
  };





  return (
    <div className={`sidebar pt-5 min-h-[77.5vh] min-w-[80px] `}
    > 
    <div className="top text-center grid">
    <Link to="/admin" style={{ textDecoration: "none" }}>
      <span className="logo">Admin</span>
    </Link>
    <Button
        type="primary"
        onClick={toggleCollapsed}
        className ={`text-dark-color hover:bg-white`}
      >
        {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined />}
      </Button>
  </div>
      <Menu
        defaultSelectedKeys={['user']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        onClick={onClick}
        inlineCollapsed={ collapsed}
        items={items}
      />
    </div>
  );
};
export default Slidebar;
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppstoreOutlined, MailOutlined, SettingOutlined,UserOutlined,WalletOutlined,SmileOutlined,ProfileOutlined,TransactionOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import './sidebar.css'
const Sidebar = () => {

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

  };

  return (
    <div className="sidebar pt-5 min-h-[77.5vh]">

      <div className="top text-center">
        <Link to="/admin" style={{ textDecoration: "none" }}>
          <span className="logo">Admin</span>
        </Link>
      </div>
      <Menu
      onClick={onClick}
      style={{
        width: 256
      }}
      mode="inline"
      items={items}
    />
    </div>
  );
};

export default Sidebar;



function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type
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


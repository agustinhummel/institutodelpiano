import React, { useRef, useState } from "react";
import { Table, Button, Typography, Input, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { deleteUser, getAllUsers } from '../Redux/actions';
import {alert} from '../functions'

const UserAdmin = () => {

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const navigate = useNavigate();
  const searchInput = useRef(null)
  const dispatch = useDispatch();
  const userSelector = useSelector((state) => state.users);
  const { Text } = Typography;

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const editHandle = (value) => {
    navigate(`/admin/edituser/${value.id}`);
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) => text,
  });
  
  const columns = [
    {
      title: "ID de Usuario",
      datIndex: "id",
      key: "id",
      responsive: ['lg'],
      ...getColumnSearchProps("id"),
      render: (value) => <Text strong>{value.id}</Text>,
    },
    {
      title: "Nombre de Usuario",
      datIndex: "userName",
      key: "userName",
      sorter: (a, b) => a.userName.localeCompare(b.userName),
      ...getColumnSearchProps("userName"),
      render: (value) => <Text strong>{value.userName}</Text>,
    },
    {
      title: "Email",
      datIndex: "email",
      key: "email",
      responsive: ['md'],
      ...getColumnSearchProps("email"),
      sorter: (a, b) => a.email.localeCompare(b.email),
      render: (value) => <Text strong>{value.email}</Text>,
    },
    {
      title: "Password",
      datIndex: "password",
      key: "password",
      responsive: ['lg'],
      ...getColumnSearchProps("password"),
      render: (value) => <Text strong>{value.password}</Text>,
    },
    {
      title: "Acciones",
      dataIndex: "",
      key: "actionButon",
      render: (value) => {
        return (
          <div>
            <Button onClick={() => editHandle(value)} ghost type="primary">
              Editar
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button onClick={() => {alert("Admin","Usuario eliminado con Exito");dispatch(deleteUser(value.id))}} danger type="primary">
              Eliminar
            </Button>
          </div>
        );
      },
    },
  ];

  return (
      <div>
        <Table key="adminUserTables" dataSource={userSelector} columns={columns} />
      </div>
  );
}

export default UserAdmin
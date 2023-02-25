import React, { useRef, useState } from "react";
import { Table, Button, Modal, Alert, Typography, Input, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { deleteUser, getAllUsers } from './../Redux/Actions/actions';
export default function AdminTestAntDesign() {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const navigate = useNavigate();
  const searchInput = useRef(null);
  const [userValue, setUserValue] = useState({});

  const dispatch = useDispatch();
  const userSelector = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const data = userSelector;

  const editHandle = (value) => {
    navigate(`/admin/edituser/${value.id}`);
  };
  const { Text } = Typography;
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(
    <Alert
      message="Are you sure you want to access this data?"
      type="error"
    />
  );

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
  const showModal = (value) => {
    setUserValue(value);
    setOpen(true);
  };

  const handleOk = () => {
    setModalText(<Alert message="Wait a few seconds..." type="success" />);
    setConfirmLoading(true);
    dispatch(deleteUser(userValue.id));
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      setModalText(
        <Alert
          message="Are you sure you want to access this data?"
          type="error"
        />
      );
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

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
            <Button onClick={() => editHandle(value)} className='bg-blue-500' type="primary">
              Editar
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button onClick={() => showModal(value)} danger type="primary">
              Eliminar
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Modal
        title="Cuidado!"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
      <div>
        <Table key="adminUserTables" dataSource={data} columns={columns} />
      </div>
    </>
  );
}

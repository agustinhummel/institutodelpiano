import React, { useRef, useState } from "react";
import { Table, Button, Typography, Input, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { deletePost, getAllPosts } from '../../redux/actions';
import {alert} from '../../functions'

const PostAdmin = () => {
  
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const navigate = useNavigate();
  const searchInput = useRef(null)
  const dispatch = useDispatch();
  const postSelector = useSelector((state) => state.posts);
  const { Text } = Typography;

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const editHandle = (value) => {
    navigate(`/admin/editpost/${value.id}`);
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
      title: "ID de Post",
      datIndex: "id",
      key: "id",
      responsive: ['lg'],
      ...getColumnSearchProps("id"),
      render: (value) => <Text strong>{value.id}</Text>,
    },
    {
      title: "Autor",
      datIndex: "author",
      key: "author",
      responsive: ['md'],
      sorter: (a, b) => a.author.localeCompare(b.author),
      ...getColumnSearchProps("author"),
      render: (value) => <Text strong>{value.author}</Text>,
    },
    {
      title: "Titulo",
      datIndex: "title",
      key: "title",
      ...getColumnSearchProps("title"),
      sorter: (a, b) => a.title.localeCompare(b.title),
      render: (value) => <Text strong>{value.title}</Text>,
    },
    {
      title: "Acciones",
      dataIndex: "",
      key: "actionButon",
      render: (value) => {
        return (
          <div>
            <Button onClick={() => {editHandle(value);console.log("post")}} ghost type="primary">
              Editar
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button onClick={() => {alert("Eliminar Post","Post eliminado con Exito");dispatch(deletePost(value.id))}} danger type="primary">
              Eliminar
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div>
        <Table key="adminPostTables" dataSource={postSelector} columns={columns} />
      </div>
    </>
  );
}


export default PostAdmin
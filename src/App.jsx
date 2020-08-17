import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Table, Pagination } from 'antd';

function App() {
  return (
    <div className="App">
      {/* <Pagination defaultCurrent={1} total={50} /> */}
      <Table columns={columns} pagination={false} dataSource={data} />
    </div>
  );
}

const columns = [
  {
    title: 'Name (all screens)',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age (medium screen or bigger)',
    dataIndex: 'age',
    key: 'age',
    responsive: ['md'],
  },
  {
    title: 'Address (large screen or bigger)',
    dataIndex: 'address',
    key: 'address',
    responsive: ['lg'],
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
];

export default App;

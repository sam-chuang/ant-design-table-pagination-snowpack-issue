import React, { useState } from '../web_modules/react.js';
import logo from './logo.svg.proxy.js';
import './App.css.proxy.js';
import '../web_modules/antd/dist/antd.css.proxy.js';
import { Table, Pagination } from '../web_modules/antd.js';

function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(Table, {
    columns: columns,
    pagination: false,
    dataSource: data
  }));
}

const columns = [{
  title: 'Name (all screens)',
  dataIndex: 'name',
  key: 'name',
  render: text => /*#__PURE__*/React.createElement("a", null, text)
}, {
  title: 'Age (medium screen or bigger)',
  dataIndex: 'age',
  key: 'age',
  responsive: ['md']
}, {
  title: 'Address (large screen or bigger)',
  dataIndex: 'address',
  key: 'address',
  responsive: ['lg']
}];
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park'
}];
export default App;
//# sourceMappingURL=App.js.map

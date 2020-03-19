import React from 'react';
import { Table, Divider, Button } from 'antd';

const columns = [
  {
    title: '序号',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: '机构名称',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '所在地区',
    dataIndex: 'area',
    key: 'area',
  },
  {
    title: '校长姓名',
    dataIndex: 'master',
    key: 'master',
  },
  {
    title: '校长手机号',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: '是否可用',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>详情</a>
        <Divider type="vertical" />
        <a>编辑</a>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    master: '小陈',
    phone: '13133809344',
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    master: '小王',
    phone: '13133809344',
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    master: '小赵',
    phone: '13133809344',
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
export default class OrgnizationList extends React.Component {
  render() {
    return <>
      <Button type="primary" style={{marginBottom: '20px'}}>新增</Button>
      <Table columns={columns} dataSource={data} />
    </>
  }
}

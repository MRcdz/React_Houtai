import { Card, Breadcrumb, Radio, Select, DatePicker, ConfigProvider, Button, Table, Tag, Space } from 'antd';
// antd icons
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import './index.css';
import zh_CN from 'antd/es/locale/zh_CN';

const { Option } = Select
const { RangePicker } = DatePicker

// table 列表
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: '70px',
    className: 'table-name',
    render: (text) => <a>{text}</a>, // eslint-disable-line
  },
  {
    title: '年龄',
    dataIndex: 'age',
    width: '70px',
    key: 'age',
    className: 'table-age'
  },
  {
    title: '个性',
    dataIndex: 'address',
    key: 'address',
    width: '200px',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';

          if (tag === '开发制作') {
            color = 'volcano';
          }

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  // 				
  {
    title: '发布时间',
    key: 'tags',
    dataIndex: 'tags',
    width: '160px'
  },
  {
    title: '阅读数',
    dataIndex: 'read',
    key: 'read',
  },
  {
    title: '评论数',
    dataIndex: 'comment',
    key: 'comment',
  },
  {
    title: '点赞数',
    dataIndex: 'star',
    key: 'star',
  },
  {
    title: '操作',
    key: 'action',
    width: '100px',
    render: (_, record) => (
      <Space size="middle">
        {/* <a>Edit</a> */}
        <Button type='primary' style={{
          width: '33px',
          height: '33px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <EditOutlined style={{ fontSize: '16px'}}/>
        </Button>
        {/* <a>Delete</a> */}
        <Button type='danger' style={{
          width: '33px',
          height: '33px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <DeleteOutlined style={{ fontSize: '16px'}}/>
        </Button>
      </Space>
    ),
    fixed: 'right'
  }
];
// table 数据
const data = [
  {
    key: '1',
    name: '饼饼',
    age: 18,
    address: 'New York No. 1 Lake Park',
    tags: ['棒棒的', '可爱的呀哈哈'],
    read: 120,
    comment:88,
    star: 99,
    className: 'table-name'
  },
  {
    key: '2',
    name: '健健',
    age: 22,
    address: 'London No. 1 Lake Park',
    tags: ['开发制作'],
    read: 10,
    comment: 20,
    star: 97
  },
  {
    key: '3',
    name: '琪琪',
    age: 17,
    address: 'Sidney No. 1 Lake Park',
    tags: ['年轻', '向上'],
    read: 100,
    comment: 88,
    star: 99
  },
  {
    key: '4',
    name: '琪琪',
    age: 17,
    address: 'Sidney No. 1 Lake Park',
    tags: ['年轻', '向上'],
    read: 100,
    comment: 88,
    star: 99
  },
  {
    key: '5',
    name: '琪琪',
    age: 17,
    address: 'Sidney No. 1 Lake Park',
    tags: ['年轻', '向上'],
    read: 100,
    comment: 88,
    star: 99
  },
  {
    key: '6',
    name: '琪琪',
    age: 17,
    address: 'Sidney No. 1 Lake Park',
    tags: ['年轻', '向上'],
    read: 100,
    comment: 88,
    star: 99
  },
  {
    key: '7',
    name: '琪琪',
    age: 17,
    address: 'Sidney No. 1 Lake Park',
    tags: ['年轻', '向上'],
    read: 100,
    comment: 88,
    star: 99
  },
  {
    key: '8',
    name: '琪琪',
    age: 17,
    address: 'Sidney No. 1 Lake Park',
    tags: ['年轻', '向上'],
    read: 100,
    comment: 88,
    star: 99
  },
  {
    key: '9',
    name: '琪琪',
    age: 17,
    address: 'Sidney No. 1 Lake Park',
    tags: ['年轻', '向上'],
    read: 100,
    comment: 88,
    star: 99
  },
  {
    key: '10',
    name: '琪琪',
    age: 17,
    address: 'Sidney No. 1 Lake Park',
    tags: ['年轻', '向上'],
    read: 100,
    comment: 88,
    star: 99
  },
  {
    key: '11',
    name: '琪琪',
    age: 17,
    address: 'Sidney No. 1 Lake Park',
    tags: ['年轻', '向上'],
    read: 100,
    comment: 88,
    star: 99
  },
  {
    key: '12',
    name: '琪琪',
    age: 17,
    address: 'Sidney No. 1 Lake Park',
    tags: ['年轻', '向上'],
    read: 100,
    comment: 88,
    star: 99
  },
  {
    key: '13',
    name: '琪琪',
    age: 17,
    address: 'Sidney No. 1 Lake Park',
    tags: ['年轻', '向上'],
    read: 100,
    comment: 88,
    star: 99
  }
];

const Article = () => {
  const [value, setValue] = useState(1);
  const radioHandler = (e) => {
    setValue(e.target.value);
  }
  return (
    <div className="site-card-border-less-wrapper">
      <Card
        className="header"
        title={
          <Breadcrumb separator=">" style={{
            fontWeight: '500'
          }}>
            <Breadcrumb.Item href="">数据概览</Breadcrumb.Item>
            <Breadcrumb.Item href="">内容管理</Breadcrumb.Item>
          </Breadcrumb>
        }
        style={{
          width: '100%',
          textAlign: 'left'
        }}
      >
        <div>
          状态：
          <Radio.Group onChange={radioHandler} value={value}>
            <Radio value={1}>全部</Radio>
            <Radio value={2}>草稿</Radio>
            <Radio value={3}>待审核</Radio>
            <Radio value={4}>审核通过</Radio>
            <Radio value={5}>审核失败</Radio>
          </Radio.Group>
        </div>
        <div style={{
          marginTop: '24px'
        }}>
          频道：
          <Select
            style={{
              width: 140,
            }}
            placeholder="请选择语言频道"
          >
            <Option value="jack">Html</Option>
            <Option value="lucy">Css</Option>
            <Option value="cpp">C++</Option>
            <Option value="js">JavaScript</Option>
            <Option value="Vue">Vue</Option>
            <Option value="React">React</Option>
            <Option value="Angular">Angular</Option>
            <Option value="Angular1">Angular3</Option>
            <Option value="Angular2">Angular1</Option>
            <Option value="Angular3">Angular2</Option>
          </Select>
        </div>
        {/* 日期 */}
        <div style={{
          marginTop: '24px'
        }}>
          日期：
          <ConfigProvider locale={zh_CN}>
            <RangePicker allowClear />
          </ConfigProvider>
        </div>
        {/* 筛选按钮 */}
        <div style={{
          marginTop: '24px'
        }}>
          <Button type="primary">筛选</Button>
        </div>
      </Card>

      {/* 筛选结果 表格 */}
      <Card
        className="result"
        title="根据筛选条件共查询到 13 条结果："
        style={{
          width: '100%',
          textAlign: 'left',
          marginTop: '20px'
        }}
      >
        <Table align='center' style={{ minWidth: '700px'}} bordered columns={columns} dataSource={data} />
      </Card>
    </div>
  );
}

export default Article;
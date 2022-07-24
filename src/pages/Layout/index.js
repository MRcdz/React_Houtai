import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import './index.css';
import { Outlet, useNavigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;


const items = [
  {
    key: 'home',
    icon: <HomeOutlined />,
    label: '数据概览'
  },
  {
    key: 'article',
    icon: <DiffOutlined />,
    label: '内容管理'
  },
  {
    key: 'publish',
    icon: <EditOutlined />,
    label: '发布文章'
  }
]
const MyLayout = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  // const [selectKey, setSelectKey] = useState(sessionStorage.getItem('selectKey') || location.pathname.split('/')[1]);
  const [selectKey] = useState(sessionStorage.getItem('selectKey') || ['home']);
  // const [selectKey, setSelectKey] = useState(['home']);
  
  useEffect (() => {
    if (!sessionStorage.getItem('selectKey')) {
      navigate('/')
    }
    // navigate('/')
  }, [navigate])
  
  const routerHandle = (e) => {
    console.log(e);
    if (e.key === 'home') {
      navigate('/')
      sessionStorage.setItem('selectKey', 'home');
    } else {
      navigate('/' + e.key)
      sessionStorage.setItem('selectKey', e.key);
    }
  }

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0
        }}
      >
        <div className="logo" style={{
          height: '64px',
          borderRight: '1px solid #888',
          textAlign: 'center',
          lineHeight: '64px',
          color: 'lightgreen',
          letterSpacing: '6px',
          fontSize: '25px',
          fontWeight: 'bold'
        }}>
          饼干
        </div>
        <Menu 
          theme="dark" 
          mode="inline" 
          defaultSelectedKeys={selectKey} 
          items={items} 
          onClick={routerHandle}></Menu>
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            position: 'fixed',
            width: '100%',
            zIndex: 999
          }}
        />
        <Content
        // 此处主要内容区域
          style={{
            margin: '24px 0 0',
            overflow: 'initial',
          }}
        >
          <div
            className="site-layout-background"
            style={{
              margin: '60px 20px',
              textAlign: 'center',
              // border: '1px solid #000',
              // height: 1000
            }}
          >
            <Outlet/>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center'
          }}
        >
          创作不易 @2022-07-22 继续努力
        </Footer>
      </Layout>
    </Layout>
  )
};

export default MyLayout;
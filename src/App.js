import React, { useEffect, useState } from 'react';
import { Button, Layout, Menu } from 'antd';
import './App.css';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Sider from 'antd/es/layout/Sider';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
const { Content } = Layout;


const items = [
  {
    key: 'main',
    label: (<Link to={ 'main'}>Main</Link>)
  },
  {
    key: 'teams',
    label: (<Link to={ 'teams'}>Teams</Link>)
  },
  {
    key: 'bracket',
    label: (<Link to={ 'bracket'}>Bracket</Link>)
  },
  {
    key: 'shedule',
    label: (<Link to={ 'shedule'}>Shedule</Link>)
  },
  {
    key: 'stream',
    label: (<Link to={ 'stream'}>Stream</Link>)
  },
];

const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  let location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/main');
    }
  } ,[location]);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ background: 'transparent', height: '100%'}}>
      <Sider 
      collapsible 
      collapsed={collapsed} 
      onCollapse={(value) => setCollapsed(value)}
      breakpoint="lg"
      collapsedWidth="0"
      trigger={null}
      className='sider'
      width={ '150px'}
      >
        <Button type='text' className='collapser' onClick={ () => toggleCollapsed()}>
          {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
        </Button>
        <Menu
            items={items}
            mode='inline'
          />
      </Sider>
      <Content className='content'>
        
        <Outlet className='outlet'/>
      </Content>
    </Layout>
  );
};

export default App;

---
order: 1
title:
  zh-CN: 嵌套布局
  en-US: Nest
---

## zh-CN

含有 header，sub-header，sider，content 和 footer 的布局。

## en-US



````jsx
import { Layout, Menu } from 'antd';
const { Header, SubHeader, Content, Footer, Sider } = Layout;

ReactDOM.render(
  <Layout className="layout">
    <Header>
      <Header.Left>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '48px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header.Left>
      <Header.Center>
        <span style={{ color: 'rgba(255, 255, 255, 0.65)' }}>Logo</span>
      </Header.Center>
      <Header.Right>
        <span style={{ color: 'rgba(255, 255, 255, 0.65)' }}>Admin</span>
      </Header.Right>
    </Header>
    <Layout>
      <SubHeader title="Sub header" onBack={() => {}}>
        Sub header content.
      </SubHeader>
      <Layout style={{ height: 300 }}>
        <Sider>
          Sider
        </Sider>
        <Content>
          Content
        </Content>
      </Layout>
    </Layout>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>
, mountNode);
````

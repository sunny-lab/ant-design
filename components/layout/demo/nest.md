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
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, SubHeader, Content, Footer, Sider } = Layout;

ReactDOM.render(
  <Layout className="layout">
    <Header>
      <div className="logo" />
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
    </Header>
    <Layout>
         <SubHeader>
            Sub header
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

````css
#components-layout-demo-top .logo {
  width: 120px;
  height: 28px;
  background: rgba(255,255,255,.2);
  margin: 10px 28px 10px 0;
  float: left;
}
````

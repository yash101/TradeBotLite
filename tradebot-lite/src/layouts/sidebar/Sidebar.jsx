import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import { pages } from '../../pages/pages';
import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

class Sidebar extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    const sidebarPages = pages.filter(page => page.sidebar)
    .map(page => <Menu.Item key={page.id} icon={<page.icon />}><Link to={page.url}>{page.title || ''}</Link></Menu.Item>);

    console.log(sidebarPages);

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['home']} mode="inline">
            { sidebarPages }
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ margin: '8px' }}><Title level={1}>{this.props.title}</Title></Header>
          <Content style={{ margin: '8px' }}>
            <div className="site-layout-background">
              ...
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>&copy;2020 Devyash Lodha</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default Sidebar;

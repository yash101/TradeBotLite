import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import { pages } from '../../pages/pages';
import { Link } from 'react-router-dom';
import { RobotOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;
const { SubMenu } = Menu;

class Sidebar extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    const marginLeft = (this.state.collapsed) ? 80 : 200;

    const sidebarMenu = pages.filter(page => page.sidebar)
    .map(page => {
      if (page.sidebarSubItems) {
        const subItems = page.sidebarSubItems.map(item => {
          return (<Menu.Item
              key={item.id}
              icon={<item.icon />}
            ><Link to={item.url}>{item.title}</Link></Menu.Item>);
        });

        return <SubMenu key={page.id} icon={<page.icon />} title={page.title}>{subItems}</SubMenu>
      } else {
        return <Menu.Item key={page.id} icon={<page.icon />}><Link to={page.url}>{page.title}</Link></Menu.Item>
      }
    });

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={this.onCollapse}
          style={{
            overflowY: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
          breakpoint="lg"
        >
          <div className="logo" />
          <Menu
            theme="dark"
            defaultSelectedKeys={[ this.props.page.id ]}
            mode="inline"
          >
            <Menu.Item
              icon={<RobotOutlined />}
            ><Link to="/">TradeBot</Link></Menu.Item>
            { sidebarMenu }
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              margin: 8,
              marginBottom: 0,
              padding: 0,
              marginLeft: marginLeft + 8,
            }}
          >
            <Title
              level={1}
              style={{
                marginLeft: '8px',
                marginRight: '8px',
                lineHeight: '64px',
              }}
            >{this.props.page.title}</Title>
          </Header>
          <Content style={{ margin: '8px' }}>
            <div 
              className="site-layout-background"
              style={{
                padding: '8px',
                marginLeft: marginLeft,
              }}
            >
              { this.props.children }
            </div>
          </Content>
          <Footer style={{ textAlign: 'center', marginLeft: marginLeft }}>&copy;2020 Devyash Lodha</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Sidebar;

import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import { pages } from '../../pages/pages';
import { Link } from 'react-router-dom';
import { RobotOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet';

import { currentUser } from '../../services/authentication';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;
const { SubMenu } = Menu;

class Sidebar extends React.Component {
  state = {
    collapsed: false,
    user: null,
  };

  componentDidMount() {
    this.userSubscription = currentUser.subscribe(user => {
      if (this.state.user !== user)
        this.setState({ user: user });
      console.log(user);
    });
  }

  componentWillUnmount = () => { this.userSubscription.unsubscribe() };

  onCollapse = collapsed => { this.setState({ collapsed }) };

  render() {
    const { collapsed } = this.state;
    const marginLeft = (this.state.collapsed) ? 80 : 200;

    const sidebarMenu = pages.filter(page => {
      // get the current user and its type
      return (page.sidebar && (!page.allowedRoles || page.allowedRoles.includes((this.state.user && this.state.user.role) || 'anonymous')));
    }).map(page => {
      // if there are subpages...
      if (page.subPages && page.subPages.length !== 0) {
        const subpages = page.subPages.filter(subpage => subpage.sidebar).map(subpage => {
          return (
            <Menu.Item
              key={subpage.id}
              icon={<subpage.icon />}
              title={subpage.title}>
              <Link to={subpage.url}>{subpage.title}</Link>
            </Menu.Item>
          );
        });
        const mainPageMenuItem = (page.Component) ? <Menu.Item key={page.id} icon={<page.icon />}><Link to={page.url}>{page.title}</Link></Menu.Item> : null;
        return (
          <SubMenu
            key={page.id}
            icon={<page.icon />}
            title={page.title}
          >
            {mainPageMenuItem}
            {subpages}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item
            key={page.id}
            icon={<page.icon />}
          ><Link to={page.url}>{page.title}</Link></Menu.Item>
        );
      }
    });

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Helmet>
          <title>{this.props.title || this.props.page.title}</title>
        </Helmet>
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

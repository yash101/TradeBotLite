import React from 'react';
import { Layout, Typography, Divider } from 'antd';
import { Helmet } from 'react-helmet';

const { Content, Footer } = Layout;
const { Title } = Typography;

class Prompt extends React.Component {
  render() {
    return (
      <Layout
        style={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          alignContent: 'center',
          paddingTop: 16,
        }}
        className="site-layout"
      >
        <Helmet>
          <title>{this.props.page.title}</title>
        </Helmet>
        <Content style={{ margin: '8px' }}>
          <div
            className="site-layout-background"
            style={{
              maxWidth: 600,
              width: '100vw',
              padding: 32
            }}
          >
            <Title level="1" style={{ textAlign: 'center' }}>{ this.props.title || 'Form' }</Title>
            <Divider />
            { this.props.children }
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>&copy;2020 Devyash Lodha</Footer>
      </Layout>
    );
  }
}

export default Prompt;

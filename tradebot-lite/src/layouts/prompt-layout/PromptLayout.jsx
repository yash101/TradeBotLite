import React from 'react';
import { Layout, Typography, Divider } from 'antd';

const { Content, Footer } = Layout;
const { Title } = Typography;

class Prompt extends React.Component {
  constructor(props) {
    super(props);
  }

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

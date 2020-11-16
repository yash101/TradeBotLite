import React from 'react';
import { Layout } from 'antd';

const { Content, Footer } = Layout;

class Prompt extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout style={{ width: '100%', minHeight: '100vh' }} className="site-layout">
        <Content style={{ margin: '8px' }}>
          <div className="site-layout-background">
            { this.props.children }
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>&copy;2020 Devyash Lodha</Footer>
      </Layout>
    );
  }
}

export default Prompt;

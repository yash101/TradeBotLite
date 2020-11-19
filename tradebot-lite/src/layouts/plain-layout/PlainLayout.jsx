import React from 'react';
import { Layout } from 'antd';
import { Helmet } from 'react-helmet';

class Plain extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        { this.props.children }
      </Layout>
    );
  }
}

export default Plain;

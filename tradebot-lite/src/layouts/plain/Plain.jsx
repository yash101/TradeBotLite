import React from 'react';
import { Layout } from 'antd';

class Plain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        { this.props.children }
      </Layout>
    );
  }
}

export default Plain;

import React from 'react';
import { Layout } from 'antd';
import { Helmet } from 'react-helmet';

class Plain extends React.Component {
  render() {
    let title = null;
    if (this.props.title)
      title = <Helmet><title>{this.props.title}</title></Helmet>;

    return (
      <Layout style={{ minHeight: '100vh' }}>
        { title }
        { this.props.children }
      </Layout>
    );
  }
}

export default Plain;

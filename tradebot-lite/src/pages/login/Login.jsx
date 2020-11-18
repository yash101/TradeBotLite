import React from 'react';
import { Form, Input, Button, Divider, Alert, Spin } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { logInUser } from '../../services/authentication';

import { ApiBase } from '../../config';
import PromptLayout from '../../layouts/prompt-layout/PromptLayout';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    errorPopup: false,
    errorMessage: 'Signin failed. Please check your username and password',
    errorType: 'error',
    spinner: false,
    redirect: null,
  };

  async formFinished(values) {
    this.setState({ spinner: true });

    const res = await logInUser(values.username, values.password);
    if (res.status) {
      this.setState({
        spinner: false,
        errorMessage: 'Signin Successful!',
        errorType: 'success',
        errorPopup: true,
        redirect: '/',
      });
    } else {
      this.setState({
        spinner: false,
        errorMessage: 'Sign In Failed' + ((res.reason) ? ': ' + res.reason : ''),
        errorType: 'error',
        errorPopup: true,
      });
    }
  }

  render() {
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };

    const buttonLayout = {
      wrapperCol: { span: 20, offset: 4 }
    };

    let errorAlert = null;
    if (this.state.errorPopup) {
      errorAlert = (
        <Alert
          message={this.state.errorMessage}
          type={this.state.errorType}
          closable="true"
          style={{ marginBottom: 24 }}
        ></Alert>
      );
    }

    if (this.state.redirect)
      return <Redirect to={this.state.redirect} />;

    return (
      <PromptLayout title="Sign Into TradeBot">
        { errorAlert }

        <Spin
          spinning={this.state.spinner}
        >
          <Form
            {...layout}
            name="loginForm"
            onFinish={values => this.formFinished(values)}
            size="large"
            layout="horizontal"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{
                required: true,
                message: 'Username or Email Required'
              }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username or Email"
              />
            </Form.Item>

            <Form.Item
              {...layout}
              label="Password"
              name="password"
              rules={[{
                required: true,
                message: 'Password is Required'
              }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item {...buttonLayout}>
              <Button type="primary" htmlType="submit">Log In</Button>
            </Form.Item>
          </Form>
        </Spin>

        <Divider />

        <div style={{ textAlign: 'center' }}>
          <Link to="/signup">Don't have an account? Sign up!</Link>
        </div>
      </PromptLayout>
    );
  }
}

const LoginPage = {
  id: 'login',
  title: 'Log In',
  Component: Login,
  sidebar: true,
  icon: UserOutlined,
  url: '/login',
};

export default LoginPage;

import React from 'react';
import { Form, Input, Button, Divider, Alert, Spin } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { register, isLoggedIn } from '../../services/authentication';

import PromptLayout from '../../layouts/prompt-layout/PromptLayout';

class Signup extends React.Component {
  state = {
    errorPopup: false,
    errorMessage: 'An error occurred while attempting to create your account. Please check to make sure you provided a unique username and email, and ensure all fields are filled out',
    errorType: 'error',
    spinner: false,
    redirect: null,
  };

  async formFinished(values) {
    this.setState({ spinner: true });

    if (values.password !== values.passwordAgain) {
      this.setState({
        spinner: false,
        errorMessage: 'Passwords must match!',
        errorType: 'error',
        errorPopup: true,
      });

      return;
    }

    const res = await register(
      values.username.toLowerCase(),
      values.email.toLowerCase(),
      values.password,
      values.fname,
      values.lname
    );

    if (!res.status) {
      this.setState({
        spinner: false,
        errorMessage: 'Failed to create account' + ((res.reason) ? ': ' + res.reason : ''),
        errorType: 'error',
        errorPopup: true,
      });
    } else {
      this.setState({
        spinner: false,
        errorMessage: 'Successfully created your TradeBot account!',
        errorType: 'success',
        errorPopup: true,
        redirect: '/login',
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

    (async () => {
      if (await isLoggedIn())
        this.setState({ loggedIn: true });
    })();
    if (this.state.loggedIn)
      return <Redirect to="/" />;

    if (this.state.redirect)
      return <Redirect to={this.state.redirect} />;

    return (
      <PromptLayout page={SignupPage} title="Create TradeBot Account">

        { errorAlert }

        <Spin spinning={this.state.spinner}>
          <Form
            {...layout}
            name="loginForm"
            onFinish={values => this.formFinished(values)}
            size="large"
            layout="horizontal"
          >
            <Form.Item
              label="First Name"
              name="fname"
              rules={[{
                required: true,
                message: 'First Name is required'
              }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="First Name"
              />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lname"
              rules={[{
                required: true,
                message: 'Last Name is Required'
              }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Last Name"
              />
            </Form.Item>

            <Form.Item
              label="Username"
              name="username"
              rules={[{
                required: true,
                message: 'Username is Required'
              }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            
            <Form.Item
              label="Email"
              name="email"
              rules={[{
                required: true,
                message: 'Email address is required'
              }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                type="email"
                placeholder="Email Address"
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

            <Form.Item
              {...layout}
              label="Password"
              name="passwordAgain"
              rules={[{
                required: true,
                message: 'Password is Required'
              }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password (Repeated)"
              />
            </Form.Item>

            <Form.Item {...buttonLayout}>
              <Button type="primary" htmlType="submit">Create TradeBot Account</Button>
            </Form.Item>
          </Form>
        </Spin>

        <Divider />

        <div style={{ textAlign: 'center' }}>
          <Link to="/login">Have an account? Sign in instead</Link>
        </div>
      </PromptLayout>
    );
  }
}

const SignupPage = {
  id: 'signup',
  title: 'TradeBot - Sign Up',
  Component: Signup,
  sidebar: false,
  icon: UserOutlined,
  url: '/signup',
};

export default SignupPage;

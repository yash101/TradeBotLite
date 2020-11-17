import React from 'react';
import { Form, Input, Button, Divider, Alert } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import PromptLayout from '../../layouts/prompt-layout/PromptLayout';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    errorPopup: false,
    errorMessage: 'An error occurred while attempting to create your account. Please check to make sure you provided a unique username and email, and ensure all fields are filled out',
  };

  formFinished(values) {
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
          type="error"
          closable="true"
          style={{ marginBottom: 24 }}
        ></Alert>
      );
    }

    return (

      <PromptLayout title="Create TradeBot Account">

        { errorAlert }

        <Form
          {...layout}
          name="loginForm"
          onFinish={this.formFinished}
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

        <Divider />

        <div style={{ textAlign: 'center' }}>
          <Link to="/login">Have an account? Sign in instead</Link>
        </div>
      </PromptLayout>
    );
  }
}

const LoginPage = {
  id: 'signup',
  title: 'Sign Up',
  Component: Login,
  sidebar: true,
  icon: UserOutlined,
  url: '/signup',
};

export default LoginPage;

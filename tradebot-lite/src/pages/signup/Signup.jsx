import React from 'react';
import { Form, Input, Button, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import PromptLayout from '../../layouts/prompt-layout/PromptLayout';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

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

    return (
      <PromptLayout title="Sign Into TradeBot">
        <Form
          {...layout}
          name="loginForm"
          onFinish={this.formFinished}
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
            name="username"
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

        <Divider />

        <div style={{ textAlign: 'center' }}>
          <Link to="/signup">Don't have an account? Sign up!</Link>
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

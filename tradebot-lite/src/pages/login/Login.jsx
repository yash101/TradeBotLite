import React from 'react';
import { UserOutlined } from '@ant-design/icons';

import PromptLayout from '../../layouts/prompt-layout/PromptLayout';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PromptLayout>
        <h1>Hello World!</h1>
      </PromptLayout>
    );
  }
}

const LoginPage = {
  id: 'login',
  title: 'Log In',
  component: Login,
  sidebar: true,
  icon: UserOutlined,
  url: '/login',
};

export default LoginPage;

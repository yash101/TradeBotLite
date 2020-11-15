import React from 'react';
import { UserOutlined } from '@ant-design/icons';

import Prompt from '../../layouts/prompt/Prompt';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Prompt>
        <h1>Hello World!</h1>
      </Prompt>
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

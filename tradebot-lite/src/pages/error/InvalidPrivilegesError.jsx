import React from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import PromptLayout from '../../layouts/prompt-layout/PromptLayout';

const { Paragraph } = Typography;

let InvalidPrivilegesErrorPage = null;

function InvalidPrivilegesError() {
  return (
    <PromptLayout page={InvalidPrivilegesErrorPage} title="Unauthorized">
      <Paragraph>Your user does not have the privileges to complete the action desired.</Paragraph>
      <Paragraph><Link to="/">Navigate back home</Link></Paragraph>
    </PromptLayout>
  );
}

InvalidPrivilegesErrorPage = {
  id: 'login',
  title: 'TradeBot - Unauthorized',
  Component: InvalidPrivilegesError,
  sidebar: false,
  icon: ExclamationCircleOutlined,
  url: '/unauthorized',
};


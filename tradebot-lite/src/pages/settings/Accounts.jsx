import React from 'react';
import { AppstoreAddOutlined } from '@ant-design/icons';
import { windowTitle } from '../../state/window'

class Accounts extends React.Component {
  render() {
    windowTitle.next('Settings | Accounts');
    return null;
  }
}

export default {
  id: 'settings/accounts',
  url: '/settings/accounts',
  component: Accounts,
  title: 'Accounts',
  icon: AppstoreAddOutlined,
  allowedRoles: ['user', 'admin', 'root'],
};

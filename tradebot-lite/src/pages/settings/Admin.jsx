import React from 'react';
import { SettingOutlined } from '@ant-design/icons';

import { windowTitle } from '../../state/window';

class Admin extends React.Component {
  render() {
    windowTitle.next('Settings | Accounts');
    return null;
  }
}

export default {
  id: 'settings/admin',
  url: '/settings/admin',
  component: Admin,
  title: 'Admin',
  icon: SettingOutlined,
  allowedRoles: ['admin', 'root'],
};

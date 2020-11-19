import React from 'react';
import { SettingOutlined } from '@ant-design/icons';

class Admin extends React.Component {
  render() {
    return null;
  }
}

const AdminPage = {
  id: 'settings/admin',
  title: 'Admin',
  url: '/settings/admin',
  Component: Admin,
  icon: SettingOutlined,
  allowedRoles: ['admin', 'root'],
  sidebar: true,
};

export default AdminPage;

import React from 'react';
import { SettingOutlined } from '@ant-design/icons';

import SidebarLayout from '../../layouts/sidebar-layout/SidebarLayout';
import AdminPage from './Admin';
import AccountsPage from './Accounts';

class Settings extends React.Component {
  state = {
    selectedPage: null,
  };

  render() {
    return (
      <SidebarLayout page={SettingsPage}>
      </SidebarLayout>
    );
  }
}

const SettingsPage = {
  id: 'settings',
  title: 'Settings',
  Component: Settings,
  url: '/settings',
  sidebar: true,
  icon: SettingOutlined,
  allowedRoles: ['user', 'admin', 'root'],
  subPages: [
    AdminPage,
    AccountsPage,
  ],
};

export default SettingsPage;

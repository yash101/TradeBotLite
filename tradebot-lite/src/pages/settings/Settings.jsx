import React from 'react';
import { Tabs } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { BrowserRouter, Switch, Route, useRouteMatch } from 'react-router-dom';

import SidebarLayout from '../../layouts/sidebar-layout/SidebarLayout';
import Admin from './Admin';
import Accounts from './Accounts';

const SettingsSubPages = {
  admin: Admin,
  accounts: Accounts,
};

class Settings extends React.Component {
  state = {
    selectedPage: null,
  };

  render() {
    return (
      <SidebarLayout page={SettingsPage} selectedSubItem={null}>
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
  sidebarSubItems: [
    SettingsSubPages.admin,
    SettingsSubPages.accounts,
  ],
};

export default SettingsPage;

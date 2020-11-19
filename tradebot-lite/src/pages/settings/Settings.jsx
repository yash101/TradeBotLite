import React from 'react';
import { Tabs } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { BrowserRouter, Switch, Route, useRouteMatch } from 'react-router-dom';

import { windowTitle } from '../../state/window';

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
    windowTitle.next('TradeBot | Settings');

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
  allowedRoles: ['user', 'admin', 'root'],
};

export default SettingsPage;

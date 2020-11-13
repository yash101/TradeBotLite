import React from 'react';
import { Tabs } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { BrowserRouter, Switch, Route, useRouteMatch } from 'react-router-dom';

import SidebarLayout from '../../layouts/sidebar/Sidebar';

const { TabPane } = Tabs;

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SidebarLayout page={SettingsPage}>
        <Tabs defaultActiveKey="1" tabPosition="left" style={{ minHeight: '100%' }}>
          <TabPane tab="Accounts" key="Accounts">
            Accounts
          </TabPane>
          <TabPane tab="Admin" key="Admin">
            Admin
          </TabPane>
        </Tabs>
      </SidebarLayout>
    );
  }
}

const SettingsPage = {
  id: 'settings',
  title: 'Settings',
  component: Settings,
  url: '/settings',
  sidebar: true,
  icon: SettingOutlined,
};

export default SettingsPage;

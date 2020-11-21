import React from 'react';
import { Tabs } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

import SidebarLayout from '../../layouts/sidebar-layout/SidebarLayout';

const { TabPane } = Tabs;

class Admin extends React.Component {
  render() {
    return (
      <SidebarLayout page={AdminPage} title="TradeBot - Administrative Settings">
        <Tabs type="card">
          <TabPane tab="ConfigVariables" key="ConfigVariables">
          </TabPane>
          <TabPane tab="Users" key="Users">
          </TabPane>
        </Tabs>
      </SidebarLayout>
    );
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

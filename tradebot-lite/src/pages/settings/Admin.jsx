import React from 'react';
import { SettingOutlined } from '@ant-design/icons';

import SidebarLayout from '../../layouts/sidebar-layout/SidebarLayout';

class Admin extends React.Component {
  render() {
    return (
      <SidebarLayout page={AdminPage} title="TradeBot - Administrative Settings">
        <h1>Administrative Settings</h1>
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

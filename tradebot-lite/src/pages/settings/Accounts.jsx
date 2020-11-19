import React from 'react';
import { AppstoreAddOutlined } from '@ant-design/icons';

import SidebarLayout from '../../layouts/sidebar-layout/SidebarLayout';

let AccountsPage;

class Accounts extends React.Component {
  render() {
    return (
      <SidebarLayout page={AccountsPage} title="TradeBot - Account Settings">
      </SidebarLayout>
    );
  }
}

AccountsPage = {
  id: 'settings/accounts',
  url: '/settings/accounts',
  Component: Accounts,
  title: 'Accounts',
  icon: AppstoreAddOutlined,
  allowedRoles: ['user', 'admin', 'root'],
  sidebar: true,
};

export default AccountsPage;

import { HomeOutlined } from '@ant-design/icons';

import { UnauthenticatedRedirector } from '../../services/authentication';
import SidebarLayout from '../../layouts/sidebar-layout/SidebarLayout';

let HomePage;

function Home() {
  return (
    <SidebarLayout page={HomePage}>
      <UnauthenticatedRedirector supportedScopes={HomePage.allowedRoles} />
      <p>Hello World!</p>
    </SidebarLayout>
  );
}

HomePage = {
  id: 'home',
  title: 'Home',
  Component: Home,
  url: '/',
  sidebar: true,
  icon: HomeOutlined,
  allowedRoles: ['user', 'admin', 'root'],
};

export default HomePage;

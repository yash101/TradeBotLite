import SidebarLayout from '../../layouts/sidebar-layout/SidebarLayout';
import { HomeOutlined } from '@ant-design/icons';

import { windowTitle } from '../../state/window';

function Home() {
  windowTitle.next('TradeBot | Home');

  return (
    <SidebarLayout page={HomePage}>
      <p>Hello World!</p>
    </SidebarLayout>
  );
}

const HomePage = {
  id: 'home',
  title: 'Home',
  Component: Home,
  url: '/',
  sidebar: true,
  icon: HomeOutlined,
  allowedRoles: ['user', 'admin', 'root'],
};

export default HomePage;

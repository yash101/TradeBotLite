import SidebarLayout from '../../layouts/sidebar-layout/SidebarLayout';
import { HomeOutlined } from '@ant-design/icons';

function Home() {
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
};

export default HomePage;

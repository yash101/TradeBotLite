import Home from './home/Home';
import Settings from './settings/Settings';
import ErrorPage from './error/Error';

import {
  HomeOutlined,
  SettingOutlined,
  CloseOutlined,
} from '@ant-design/icons';

const pages = [
  {
    id: 'home',
    title: 'Home',
    component: Home,
    url: '/',
    sidebar: true,
    icon: HomeOutlined
  },
  {
    id: 'settings',
    title: 'Settings',
    component: Settings,
    url: '/settings',
    sidebar: true,
    icon: SettingOutlined,
  },
  {
    id: 'error',
    title: 'Error',
    component: ErrorPage,
    url: '/error',
    sidebar: false,
    icon: CloseOutlined,
  },
];

export { pages };

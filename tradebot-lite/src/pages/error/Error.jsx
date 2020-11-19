import { CloseOutlined } from '@ant-design/icons';

import SidebarLayout from '../../layouts/sidebar-layout/SidebarLayout';

let ErrorPage;

function Error() {
  return (
    <SidebarLayout page={ErrorPage} title={ErrorPage.title}>
      <h1>An error occurred.</h1>
    </SidebarLayout>
  );
}

ErrorPage = {
  id: 'error',
  title: 'Error',
  Component: Error,
  url: '/error',
  sidebar: false,
  icon: CloseOutlined,
};

export default ErrorPage;

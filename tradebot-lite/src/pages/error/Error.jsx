import { CloseOutlined } from '@ant-design/icons';

function Error() {
  return <h1>Error</h1>;
}

const ErrorPage = {
  id: 'error',
  title: 'Error',
  Component: Error,
  url: '/error',
  sidebar: false,
  icon: CloseOutlined,
};

export default ErrorPage;

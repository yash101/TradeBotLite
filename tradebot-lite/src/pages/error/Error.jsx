import { CloseOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet';

function Error() {
  <Helmet>
    <title>Error</title>
  </Helmet>
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

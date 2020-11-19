import { CloseOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet';

import { windowTitle } from '../../state/window';

function Error() {
  windowTitle.next('TradeBot | Error');
  return <h1>Error</h1>;
}

const ErrorPage = {
  id: 'error',
  title: 'Error',
  Component: Error,
  url: '/error',
  sidebar: true,
  icon: CloseOutlined,
};

export default ErrorPage;

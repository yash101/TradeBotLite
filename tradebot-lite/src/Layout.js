import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { pages } from './pages/pages';
import ErrorPage from './pages/error/Error';

function Layout() {
  const routes = pages.map(page => {
    const exact = page.url === '/';
    return <Route path={page.url} key={page.id} exact={exact}><page.component page={page}/></Route>;
  });
  console.log(routes);
  return (
    <BrowserRouter>
      <Switch>
        {routes}
        <Route><ErrorPage /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Layout;

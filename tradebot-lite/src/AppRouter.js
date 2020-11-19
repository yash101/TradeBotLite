import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { pages } from './pages/pages';
import ErrorPage from './pages/error/Error';

function Layout() {
  let routes = [];
  pages.forEach(page => {
    (page.subPages || []).forEach(subpage => {
      routes.push(<Route path={subpage.url} key={subpage.id}><subpage.Component /></Route>);
    });
    const exactRoute = page.url === '/';
    routes.push(<Route path={page.url} key={page.id} exact={exactRoute}><page.Component page={page} /></Route>);
  });

  return (
    <BrowserRouter>
      <Switch>
        {routes}
        <Route><ErrorPage.Component /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Layout;

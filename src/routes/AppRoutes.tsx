import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';

const AppRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default AppRoutes;

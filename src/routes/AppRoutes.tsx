import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import Catalogo from 'pages/Catalogo';

const AppRoutes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/catalogo" exact>
        <Catalogo />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default AppRoutes;

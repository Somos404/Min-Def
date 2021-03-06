import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './config/routes';
import Footer from 'componentes/ui/Footer';
import '../src/App.scss';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <RouterWithSubRoutes key={index} {...route} />
        ))}
      </Switch>
      <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
    </Router>
  );
}

function RouterWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component routes={route.routes} {...props} />}
    />
  )
}

export default App;

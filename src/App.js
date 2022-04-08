import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ServicesList from './components/servicesList'
import ServicesDetail from './components/servicesDetail'
import OrderList from './components/ordersList'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <ServicesList />
          </Route>
          <Route path="/detail">
            <ServicesDetail />
          </Route>
          <Route path="/order">
            <OrderList />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

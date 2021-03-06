import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from './components/List/List';
import Element from './components/Element/Element';
import { memo } from 'react';

const App = () => (
  <Router basename="/snp_list">
    <Switch>
      <Route exact path="/">
        <List />
      </Route>
      <Route path="/items/new">
        <Element newId />
      </Route>
      <Route path="/items/:id">
        <Element />
      </Route>
    </Switch>
  </Router>
);

export default memo(App);

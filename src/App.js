import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from './components/List/List';
import Element from './components/Element/Element';
import { memo } from 'react';

const App = () => (
    <Router>
        <Switch>
          <Route exact path="/">
            <List />
          </Route>
          <Route path="/items/:id">
            <Element /> 
          </Route>
          <Route path={`/search=:filterWord`}>
            <List />
          </Route>
        </Switch>
    </Router>
);

export default memo(App);

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from './components/List/List';
import Element from './components/Element/Element';

const items = [{
  id: '1',
  name: 'Лобашов',
  phoneNumber: '980102848012',
  placeOfResidence: 'asdasdasasd',
}, {
  id: '2',
  name: 'Лобашов Александр Максимович',
  phoneNumber: '8-996-922-10-64',
  placeOfResidence: 'Российская Федерация, обл. Тверская, г. Вышний Волочёк, ул. Чехова, д. 31'}
];

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <List 
              items={items}
            />
          </Route>
          <Route path="/items/:id">
            <Element /> 
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

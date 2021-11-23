import './App.css';
import List from './components/List/List';

const items = [{
  id: '1',
  name: 'Лобашов',
  phoneNumbers: '980102848012',
  placeOfResidence: 'asdasdasasd',
}, {
  id: '2',
  name: 'Лобашов Александр Максимович',
  phoneNumbers: '8-996-922-10-64',
  placeOfResidence: 'Российская Федерация, обл. Тверская, г. Вышний Волочёк, ул. Чехова, д. 31'}
];

function App() {
  return (
    <List 
      items={items}
    />
  );
}

export default App;

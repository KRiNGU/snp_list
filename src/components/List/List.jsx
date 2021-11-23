import { memo } from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import Filter from '../Filter/Filter';
import ListItem from './ListItem/ListItem';
import ListParameters from './ListParameters/ListParameters';
import './List.css';

const List = ({items}) => {
  return (
    <div className="list">
      <Filter />
      <ListParameters />
      {items.map((item) => (
        <ListItem
          key={item.id}
          id={item.id}
          name={item.name}
          phoneNumbers={item.phoneNumbers}
          placeOfResidence={item.placeOfResidence}
        />
      ))}
      <button className="button__corner">
        <IoIosAddCircle size="40px" />
      </button>
    </div>
  );
};

export default memo(List);

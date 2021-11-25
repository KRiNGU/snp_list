import { memo, useCallback } from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import Filter from '../Filter/Filter';
import ListItem from './ListItem/ListItem';
import ListParameters from './ListParameters/ListParameters';
import './List.css';
import { useDispatch, useSelector } from 'react-redux';
import { addElement } from '../../state/List/reducer';
import { Link } from 'react-router-dom';

const List = () => {

  const dispatch = useDispatch();
  const items = useSelector(state => state.items);
  const newId = Date.now().toString().slice(1);

  const handleAdd = useCallback(() => {
    dispatch(addElement({newId}));
  }, [dispatch, newId]);

  return (
    <div className="list">
      <Filter />
      <ListParameters />
      {items.map((item) => (
        <ListItem
          key={item.id}
          id={item.id}
          name={item.name}
          phoneNumber={item.phoneNumber}
          placement={item.placement}
        />
      ))}
      <button className="button__corner" onClick={handleAdd}>
        <Link to={`/items/${newId}`}>
          <IoIosAddCircle color='black' size="40px" />
        </Link>
      </button>
    </div>
  );
};

export default memo(List);

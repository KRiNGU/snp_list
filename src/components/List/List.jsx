import { memo, useCallback, useEffect } from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import Filter from './Filter/Filter';
import ListItem from './ListItem/ListItem';
import ListParameters from './ListParameters/ListParameters';
import styles from './List.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import queryString from 'query-string';
import Button from '../Button/Button';

const List = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  useEffect(() => dispatch({type: 'LOAD_LIST'}), [dispatch]);
  const parsedLocation = queryString.parse(location.search);
  const filterWord = parsedLocation.search?.toLowerCase();
  

  const handleAdd = useCallback(() => {
    history.push(`/items/new`);
  }, [history]);

  const doFilter = useCallback(
    (items) => {
      if (!filterWord) {
        return items;
      }
      return items.filter(
        (item) =>
          item.id.includes(filterWord) ||
          item.name.toLowerCase().includes(filterWord) ||
          item.phoneNumber.includes(filterWord) ||
          item.placement.toLowerCase().includes(filterWord)
      );
    },
    [filterWord]
  );

  const items = useSelector((state) => doFilter(state.items));

  return (
    <div className={styles.list}>
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
      <Button className={styles.cornerButton} onClick={handleAdd}>
        <IoIosAddCircle color="black" size="40px" />
      </Button>
    </div>
  );
};

export default memo(List);

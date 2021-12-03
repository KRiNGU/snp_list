import { memo, useCallback, useState, useEffect } from 'react';
import styles from './Element.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';

const Element = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => dispatch({type: 'LOAD_CONTACT', payload: {id}}), [dispatch, id]);
  const userInfo = useSelector((state) =>
    state.items.find((item) => item.id === id)
  );
  const [name, setName] = useState(userInfo?.name);
  const [phoneNumber, setPhoneNumber] = useState(userInfo?.phoneNumber);
  const [placement, setPlacement] = useState(userInfo?.placement);
  const handleChangeName = useCallback(
    (e) => {
      const value = e.target.value;
      dispatch({type: 'CHANGE_NAME', payload: {id, name: value, phoneNumber, placement}});
      setName(value);
    },
    [dispatch, setName, id, phoneNumber, placement]
  );

  const handleChangePhoneNumber = useCallback(
    (e) => {
      const value = e.target.value;
      dispatch({type: 'CHANGE_PHONE', payload: {id, name, phoneNumber: value, placement}});
      setPhoneNumber(value);
    },
    [dispatch, setPhoneNumber, id, name, placement]
  );

  const handleChangePlacement = useCallback(
    (e) => {
      const value = e.target.value;
      dispatch({type: 'CHANGE_PLACEMENT', payload: {id, name, phoneNumber, placement: value}});
      setPlacement(value);
    },
    [dispatch, setPlacement, id, name, phoneNumber]
  );

  if (!userInfo) {
    return <h2>Отсутствует пользователь с таким id</h2>;
  }

  return (
    <div className={styles.background}>
      <Button className={styles.exitButton}>
        <Link to="/">
          <AiOutlineArrowLeft color="black" />
        </Link>
      </Button>
      <h2 className={styles.title}>Информация о человеке</h2>
      <ul className={styles.list}>
        <li className={styles.property}>
          <div className={styles.name}>ID:</div>
          <div className={styles.parameter}>{id}</div>
        </li>
        <li className={styles.property}>
          <div className={styles.name}>ФИО:</div>
          <input
            type="text"
            className={styles.input}
            value={name}
            onChange={handleChangeName}
            placeholder="Введите имя"
          />
        </li>
        <li className={styles.property}>
          <div className={styles.name}>Номер телефона:</div>
          <input
            type="text"
            className={styles.input}
            value={phoneNumber}
            onChange={handleChangePhoneNumber}
            placeholder="Введите телефон"
          />
        </li>
        <li className={styles.property}>
          <div className={styles.name}>Место проживания:</div>
          <input
            type="text"
            className={styles.input}
            value={placement}
            onChange={handleChangePlacement}
            placeholder="Введите адрес проживания"
          />
        </li>
      </ul>
    </div>
  );
};

export default memo(Element);

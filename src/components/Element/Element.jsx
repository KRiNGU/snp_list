import { memo, useCallback, useState, useEffect, useRef } from 'react';
import styles from './Element.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';

const Element = ({ newId }) => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const nextId = useRef(Date.now().toString().slice(1));
  if (newId) {
    id = nextId.current;
  };
  const userInfo = useSelector((state) =>
    state.items.find((item) => item.id === id)
  );
  const [name, setName] = useState(userInfo?.name ?? '');
  const [phoneNumber, setPhoneNumber] = useState(userInfo?.phoneNumber ?? '');
  const [placement, setPlacement] = useState(userInfo?.placement ?? '');
  useEffect(() => {
    setName(userInfo?.name ?? '');
    setPhoneNumber(userInfo?.phoneNumber ?? '');
    setPlacement(userInfo?.placement ?? '');
  }, [userInfo]);
  useEffect(() => {
    if (!newId) {
      dispatch({ type: 'LOAD_CONTACT', payload: { id } });
    }
  }, [dispatch, id, newId]);
  const handleChangeName = useCallback(
    (e) => {
      const value = e.target.value;
      setName(value);
    },
    [setName]
  );

  const handleChangePhoneNumber = useCallback(
    (e) => {
      const value = e.target.value;
      setPhoneNumber(value);
    },
    [setPhoneNumber]
  );

  const handleChangePlacement = useCallback(
    (e) => {
      const value = e.target.value;
      setPlacement(value);
    },
    [setPlacement]
  );

  const handleChangeContact = useCallback(() => {
    dispatch({
      type: newId ? 'ADD_CONTACT' : 'CHANGE_CONTACT',
      payload: { id, name, phoneNumber, placement },
    });
  }, [dispatch, id, name, phoneNumber, placement, newId]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        handleChangeContact();
      }
    },
    [handleChangeContact]
  );

  if (!userInfo && !newId) {
    return <h2>Отсутствует пользователь с таким id</h2>;
  }

  return (
    <div className={styles.background} onKeyDown={handleKeyDown}>
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
      <Button onClick={handleChangeContact} className={styles.saveButton}>
        Сохранить
      </Button>
    </div>
  );
};

export default memo(Element);

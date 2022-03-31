import React, {useEffect, useRef, useState} from 'react';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {Outlet} from 'react-router-dom';
import WilixHeader from '../WilixHeader/WilixHeader';
import {useDispatch, useSelector} from 'react-redux';
import {resultAction} from '../../store/actionCreators';
import {preloaderSelector} from '../../store/selectors';
import {Spinner} from 'react-bootstrap';
import './SearchControl.css';

const SearchControl: React.FC = () => {
  const dispatch = useDispatch<any>();
  const preloader = useSelector(preloaderSelector);

  const [parsEnabled, setParsEnabled] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // При монтировании ставим фокус на поле ввода
  useEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus();
  }, []);

  const startParse = (): void => {
    if (inputRef.current !== null) {
      dispatch(resultAction(inputRef.current.value));
    }
  };

  // Посик доступен только если есть какие-то символы в поле воода
  const searchTextChangeHandler = (event: React.ChangeEvent): void => {
    setParsEnabled(!!(event.target as HTMLInputElement).value);
  };

  // При нажатии на Enter - запускаем парсинг
  const keyDownHandler = (event: React.KeyboardEvent): void => {
    if ((event.key === 'Enter' || event.key === 'NumpadEnter') && parsEnabled) {
      startParse();
    }
  };

  // При клике на кнопку поиска - запускаем парсинг
  const clickHandler = (): void => {
    if (!parsEnabled) return;
    startParse();
  };

  return (
    <Container>
      <Stack gap={2}>
        <WilixHeader/>
        <Stack gap={2} direction="horizontal">
          <Form.Control
            type="text"
            onChange={searchTextChangeHandler}
            onKeyDown={keyDownHandler}
            ref={inputRef}
            placeholder="Введите запрос"
            disabled={preloader}
          />
          <Button variant="primary" disabled={!parsEnabled || preloader} onClick={clickHandler}>
            Найти
          </Button>
        </Stack>
        <div className="content_container">
          {preloader ? <Spinner animation="border" className="center-block"/> :
            <Outlet/>}
        </div>
      </Stack>
    </Container>
  );
};

export default SearchControl;

import React, {useEffect, useRef, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import WilixHeader from '../WilixHeader/WilixHeader';
import {useDispatch, useSelector} from 'react-redux';
import {parseQuery} from '../../store';
import './App.css';

const App: React.FC = () => {
  const dispatch = useDispatch<any>();
  const state = useSelector((state) => state);
  const [hasButton, setHasButton] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Тестовый вывод
  useEffect(() => {
    console.log(state);
  }, [state]);

  const searchTextChangeHandler = (event: React.ChangeEvent): void => {
    setHasButton(!!(event.target as HTMLInputElement).value);
  };

  const clickHandler = (): void => {
    if (!hasButton || inputRef.current === null) return;
    dispatch(parseQuery(inputRef.current.value));
  };

  return (
    <Container>
      <Stack gap={2}>
        <WilixHeader/>
        <Stack gap={2} direction="horizontal">
          <Form.Control
            type="text"
            onChange={searchTextChangeHandler}
            ref={inputRef}
            placeholder="Введите запрос"
          />
          <Button variant="primary" disabled={!hasButton} onClick={clickHandler}>
            Найти
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default App;

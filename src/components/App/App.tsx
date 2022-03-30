import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import WilixHeader from '../WilixHeader/WilixHeader';
import './App.css';

const App: React.FC = () => {
  const [hasSearchBtn, setHasSearchBtn] = useState<boolean>(false);

  const searchTextChangeHandler = (event: React.ChangeEvent): void => {
    setHasSearchBtn(!!(event.target as HTMLInputElement).value);
  };

  const clickHandler = (): void => console.log('Сработало');

  return (
    <Container>
      <Stack gap={2}>
        <WilixHeader/>
        <Stack gap={2} direction="horizontal">
          <Form.Control type="text" onChange={searchTextChangeHandler} placeholder="Введите запрос"/>
          <Button variant="primary" disabled={!hasSearchBtn} onClick={clickHandler}>
            Найти
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default App;

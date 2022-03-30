import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import './App.css';

const App: React.FC = () => {
  const clickHandler = (): void => console.log('Сработало');

  return (
    <Container>
      <Stack gap={2}>
        <h1 className="text-center">Wilix Search</h1>
        <Stack gap={2} direction="horizontal">
          <Form.Control type="text" placeholder="Введите запрос"/>
          <Button variant="primary" onClick={clickHandler}>Найти</Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default App;

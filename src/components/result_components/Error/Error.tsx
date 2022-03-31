import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../../../style/common.css';

const Error: React.FC = () => {
  return (
    <Card style={{width: '20rem'}}>
      <Card.Header>Внимание!</Card.Header>
      <Card.Body>
        <Card.Title>Ошибка</Card.Title>
        <Card.Text>К сожалению, по вашему запросу ничего не найдено</Card.Text>
        <Button variant="primary">Очистить</Button>
      </Card.Body>
    </Card>
  );
};

export default Error;

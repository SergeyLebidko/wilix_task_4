import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useSelector} from 'react-redux';
import {resultSelector} from '../../store/selectors';
import {CARD_PLACEHOLDER} from '../../settings';

type ResultCardProps = {
  headerText: string
}

const ResultCard: React.FC<ResultCardProps> = ({headerText}) => {
  const result = useSelector(resultSelector);
  return (
    <Card style={{width: '100%'}}>
      <Card.Header>{headerText}</Card.Header>
      <Card.Body>
        <Card.Title>{result?.query}</Card.Title>
        <Card.Text>{CARD_PLACEHOLDER}</Card.Text>
        <Button variant="primary">Новый поиск</Button>
      </Card.Body>
    </Card>
  );
};

export default ResultCard;

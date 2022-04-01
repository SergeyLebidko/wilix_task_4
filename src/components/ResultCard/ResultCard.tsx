import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useSelector} from 'react-redux';
import {resultSelector} from '../../store/selectors';
import {CARD_PLACEHOLDER} from '../../settings';
import './ResultCard.css';

type ResultCardProps = {
  headerText: string,
  error?: boolean
}

const ResultCard: React.FC<ResultCardProps> = ({headerText, error=false}) => {
  const result = useSelector(resultSelector);
  return (
    <Card className={`rise_card ${error ? 'error' : ''}`}>
      <Card.Header>{headerText}</Card.Header>
      <Card.Body>
        <Card.Title>
          {error ? 'К сожалению, по вашему запросу ничего не найдено...' : result?.query}
        </Card.Title>
        {!error && <Card.Text>{CARD_PLACEHOLDER}</Card.Text>}
        <Button variant={error ? 'light' : 'primary'}>Новый поиск</Button>
      </Card.Body>
    </Card>
  );
};

export default ResultCard;

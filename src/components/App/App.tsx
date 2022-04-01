import React, {useEffect} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import SearchControl from '../SearchControl/SearchControl';
import {useSelector} from 'react-redux';
import {resultSelector} from '../../store/selectors';
import {
  ERROR_URL,
  FAMILY_NAME_URL,
  IP_ADDRESS_URL,
  NICK_URL, PATH_SELECTOR,
  PHONE_URL,
  POST_URL,
} from '../../settings';
import Error from '../result_components/Error/Error';
import ResultCard from '../ResultCard/ResultCard';

const App: React.FC = () => {
  const navigate = useNavigate();
  const result = useSelector(resultSelector);

  useEffect(() => {
    // Если никаких результатов парсинга в хранилище нет - переводим пользователя на пустую главную страницу
    if (result === null) {
      navigate('/');
      return;
    }

    // В зависимости от типа ответа от "бэкенда" - переводим пользователя по нужному адресу
    navigate(`${PATH_SELECTOR[result.type]}?q=${encodeURI(result.query)}`);
  }, [result, navigate]);

  return (
    <Routes>
      <Route path="/" element={<SearchControl/>}>
        <Route path={ERROR_URL} element={<Error/>}/>
        <Route path={POST_URL} element={<ResultCard headerText="Адрес электронной почты"/>}/>
        <Route path={PHONE_URL} element={<ResultCard headerText="Номер телефона"/>}/>
        <Route path={NICK_URL} element={<ResultCard headerText="Никнэйм"/>}/>
        <Route path={FAMILY_NAME_URL} element={<ResultCard headerText="Имя и фамилия"/>}/>
        <Route path={IP_ADDRESS_URL} element={<ResultCard headerText="IP-адрес"/>}/>
      </Route>
    </Routes>
  );
};

export default App;

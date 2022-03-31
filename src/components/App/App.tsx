import React, {useEffect} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import SearchControl from '../SearchControl/SearchControl';
import Post from '../result_components/Post/Post';
import Phone from '../result_components/Phone/Phone';
import Nick from '../result_components/Nick/Nick';
import FamilyName from '../result_components/FamilyName/FamilyName';
import IPAddress from '../result_components/IPAddress/IPAddress';
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
import {ResultType} from '../../backend/types';

const App: React.FC = () => {
  const navigate = useNavigate();
  const result = useSelector(resultSelector);

  useEffect(() => {
    // Если никакие запросы еще не выполнялись - переводим пользователя на пустую страницу
    if (result === null) {
      navigate('/');
      return;
    }

    // Ошибку обрабатываем отдельно, так как в случае ошибки не ожидаем от "бэкенда" нормализованного текста
    if (result.type === ResultType.Error) {
      navigate(`${ERROR_URL}?q=${encodeURI(result.rawQuery)}`);
      return;
    }

    // Если результат выполнения запроса на "бэк" не содержит ошибок, то в нем обязательно будет нормализованный текст
    navigate(`${PATH_SELECTOR[result.type]}?q=${encodeURI(result.normalizeQuery as string)}`);
  }, [result, navigate]);

  return (
    <Routes>
      <Route path="/" element={<SearchControl/>}>
        <Route path={ERROR_URL} element={<Error/>}/>
        <Route path={POST_URL} element={<Post/>}/>
        <Route path={PHONE_URL} element={<Phone/>}/>
        <Route path={NICK_URL} element={<Nick/>}/>
        <Route path={FAMILY_NAME_URL} element={<FamilyName/>}/>
        <Route path={IP_ADDRESS_URL} element={<IPAddress/>}/>
      </Route>
    </Routes>
  );
};

export default App;

import {BACKEND_TIMEOUT, FN_RX, NICK_RX} from '../settings';
import {ParseResult, ResultType} from './types';
import validator from 'validator';

// Эта функция имитирует бэкенд, на который уходит поисковой запрос
export function backend(query: string): Promise<ParseResult> {
  query = validator.trim(query);

  return new Promise<ParseResult>((resolve) => {
    // Имитируем сетевую задержку
    setTimeout(() => {
      // Проверяем на адрес электронной почты
      if (validator.isEmail(query)) {
        resolve({
          type: ResultType.Post,
          query,
        });
        return;
      }

      // Проверяем на номер мобильного телефона
      // При этом предполагаем, что пользователь мог использовать тире, скобки и пробелы
      if (validator.isMobilePhone(validator.blacklist(query, ' \\-\(\)'))) {
        resolve({
          type: ResultType.Phone,
          query: validator.blacklist(query, ' \\-\(\)'),
        });
        return;
      }

      // Проверяем на ник (юзернэйм)
      // Предполагаем, что пользователь ввел строку из букв и/или цифр, которая может также содержать символ @
      if (NICK_RX.test(query)) {
        resolve({
          type: ResultType.Nick,
          query,
        });
        return;
      }

      // Проверяем на имя и фамилию
      // Предполагаем, что пользователь ввел два слова, состоящие только из букв
      const _query = query.split(/\s+/);
      if (_query.length === 2 && FN_RX.test(_query[0]) && FN_RX.test(_query[1])) {
        resolve({
          type: ResultType.FamilyName,
          query: _query.join(' '),
        });
        return;
      }

      // Проверяем на ip-адрес
      if (validator.isIP(query)) {
        resolve({
          type: ResultType.IPAddress,
          query,
        });
        return;
      }

      // Если ни одна из проверок не прошла - возвращаем результат с типом "ошибка"
      resolve({type: ResultType.Error, query});
    }, BACKEND_TIMEOUT);
  });
}

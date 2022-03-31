import {BACKEND_TIMEOUT} from '../settings';
import {ParseResult, ResultType} from './types';

// Эта функция имитирует бэкенд, на который уходит поисковой запрос
export function backend(query: string): Promise<ParseResult> {
  return new Promise<ParseResult>((resolve) => {
    // Имитируем сетевую задержку
    setTimeout(() => {
      // Временный код-заглушка, возвращающий фиктивные результаты
      const result: ParseResult = {
        type: ResultType.Error,
        rawQuery: query,
        normalizeQuery: null,
      };
      if (query === 'post') {
        result.type = ResultType.Post;
      }
      if (query === 'phone') {
        result.type = ResultType.Phone;
      }
      if (query === 'nick') {
        result.type = ResultType.Nick;
      }
      if (query === 'familyname') {
        result.type = ResultType.FamilyName;
      }
      if (query === 'ipaddress') {
        result.type = ResultType.IPAddress;
      }

      if (result.type !== ResultType.Error) {
        result.normalizeQuery = query;
      }
      resolve(result);
    }, BACKEND_TIMEOUT);
  });
}

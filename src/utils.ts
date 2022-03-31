import {BACKEND_TIMEOUT} from './settings';

// Проверки ниже подавлены специально, так как WebStorm по какой-то неизвестной
// причине считал, что перечисление не используется
export enum ResultType {
  // eslint-disable-next-line no-unused-vars
  Error,
  // eslint-disable-next-line no-unused-vars
  Post,
  // eslint-disable-next-line no-unused-vars
  Phone,
  // eslint-disable-next-line no-unused-vars
  Nick,
  // eslint-disable-next-line no-unused-vars
  FamilyName,
  // eslint-disable-next-line no-unused-vars
  IPAddress
}

export type ParseResult = {
  type: ResultType,
  rawQuery: string,
  normalizeQuery: string | null
}

// Эта функция имитирует бэкенд, на который уходит поисковой запрос
export function backend(query: string): Promise<ParseResult> {
  return new Promise<ParseResult>((resolve) => {
    // Имитируем сетевую задержку
    setTimeout(() => {
      // Временный код-заглушка, возвращающий фиктивные результаты
      const result = {
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
      if (query === 'nickname') {
        result.type = ResultType.Nick;
      }
      if (query === 'familyname') {
        result.type = ResultType.FamilyName;
      }
      if (query === 'ipaddress') {
        result.type = ResultType.IPAddress;
      }

      resolve(result);
    }, BACKEND_TIMEOUT);
  });
}

export enum ResultType {
  Error,
  Post,
  Phone,
  Nick,
  FamilyName,
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
    }, 1000);
  });
}

enum ResultType {
  Error,
  Post,
  Phone,
  NickName,
  FamilyName,
  IPAddress
}

export type QueryParseResult = {
  type: ResultType,
  rawQuery: string,
  normalizeQuery: string | null
}

export async function queryParser(query: string): Promise<QueryParseResult> {
  // Код-заглушка, возвращающий фиктивные результаты
  if (query === 'post') {
    return {
      type: ResultType.Post,
      rawQuery: query,
      normalizeQuery: query,
    };
  }
  if (query === 'phone') {
    return {
      type: ResultType.Phone,
      rawQuery: query,
      normalizeQuery: query,
    };
  }
  if (query === 'nickname') {
    return {
      type: ResultType.NickName,
      rawQuery: query,
      normalizeQuery: query,
    };
  }
  if (query === 'familyname') {
    return {
      type: ResultType.FamilyName,
      rawQuery: query,
      normalizeQuery: query,
    };
  }
  if (query === 'ipaddress') {
    return {
      type: ResultType.IPAddress,
      rawQuery: query,
      normalizeQuery: query,
    };
  }

  return {
    type: ResultType.Error,
    rawQuery: query,
    normalizeQuery: null,
  };
}

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
};

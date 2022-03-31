import {ParseResult} from '../backend/types';

export type RootState = {
  preloader: boolean,
  result: ParseResult | null
};

export type ResultActionType = {
  type: 'set_result',
  payload: ParseResult
};

export type PreloaderActionType = {
  type: 'set_preloader',
  payload: boolean
};

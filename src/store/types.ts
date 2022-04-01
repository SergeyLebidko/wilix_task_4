import {ParseResult} from '../backend/types';

export type RootState = {
  preloader: boolean,
  result: ParseResult | null
};

export type SetResultActionType = {
  type: 'set_result',
  payload: ParseResult
};

export type ClearResultActionType = {
  type: 'clear_result'
}

export type ResultActionsType = SetResultActionType | ClearResultActionType;

export type PreloaderActionType = {
  type: 'set_preloader',
  payload: boolean
};

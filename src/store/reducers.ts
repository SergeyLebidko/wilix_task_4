
import {ParseResult} from '../backend/types';
import {PreloaderActionType, ResultActionType} from './types';

export function resultReducer(state: ParseResult | null = null, action: ResultActionType): ParseResult | null {
  switch (action.type) {
    case 'set_result': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function preloaderReducer(state: boolean = false, action: PreloaderActionType): boolean {
  switch (action.type) {
    case 'set_preloader': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

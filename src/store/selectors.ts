import {ParseResult} from '../backend/types';
import {RootState} from './types';

export const preloaderSelector = (state: RootState): boolean => state.preloader;

export const resultSelector = (state: RootState): ParseResult | null => state.result;

import {RootState} from './store';
import {ParseResult} from '../utils';

export const preloaderSelector = (state: RootState): boolean => state.preloader;

export const resultSelector = (state: RootState): ParseResult | null => state.result;

import {backend} from '../backend/utils';
import {Dispatch} from 'redux';
import {PreloaderActionType} from './types';

export const resultAction = (query: string) => async (dispatch: Dispatch) => {
  // Показываем пользователю прелоадер перед "отправкой" данных на бэкенд
  dispatch(preloaderAction(true));

  // Запрашиваем "бэкенд"
  const result = await backend(query);
  dispatch({type: 'set_result', payload: result});

  // После того, как данные попали в хранилище - отключаем прелоадер
  dispatch(preloaderAction(false));
};

export const preloaderAction = (showPreloader: boolean): PreloaderActionType => {
  return {
    type: 'set_preloader',
    payload: showPreloader,
  };
};

import {applyMiddleware, createStore, Dispatch} from 'redux';
import thunk from 'redux-thunk';
import {queryParser, QueryParseResult} from './utils';
import {composeWithDevTools} from 'redux-devtools-extension';

type SetResultAction = {
  type: 'set_result_action',
  payload: QueryParseResult
}

export type RootState = null | QueryParseResult;

function reducer(state: RootState = null, action: SetResultAction): RootState {
  switch (action.type) {
    case 'set_result_action': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function parseQuery(query: string) {
  return async (dispatch: Dispatch) => {
    const parseResult = await queryParser(query);
    dispatch({
      type: 'set_result_action',
      payload: parseResult,
    });
  };
}

const store = createStore(reducer, null, composeWithDevTools(applyMiddleware(thunk)));

export default store;

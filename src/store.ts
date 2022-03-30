import {applyMiddleware, createStore, Dispatch} from 'redux';
import thunk from 'redux-thunk';
import {queryParser, QueryParseResult} from './utils';

type SetResultAction = {
  type: 'set_result_action',
  payload: QueryParseResult
}

function reducer(state: null | QueryParseResult = null, action: SetResultAction): null | QueryParseResult {
  switch (action.type) {
    case 'set_result_action': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export const parseQuery = (query: string) => async (dispatch: Dispatch<SetResultAction>) => {
  const parsedQuery = await queryParser(query);
  dispatch({
    type: 'set_result_action',
    payload: parsedQuery,
  });
};

const store = createStore(reducer, null, applyMiddleware(thunk));

export default store;

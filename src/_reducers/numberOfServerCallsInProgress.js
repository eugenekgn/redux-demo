import * as types from '../_actions/types';

const isSuccess = (type) => {
  return type.includes('_SUCCESS');
};

const numberOfServerCallsInProgress = 0;


const serverCallStatusReducer = (state = numberOfServerCallsInProgress, action) => {
  if (action.type === types.MAKE_SERVER_CALL) {
    return state + 1;
  } else if (action.type === types.ACTION_SERVER_ERROR || isSuccess(action.type)) {
    return state - 1;
  }

  return state;
};

export default serverCallStatusReducer;
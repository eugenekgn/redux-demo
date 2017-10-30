import * as types from '../_actions/types';

const dictatorReducer = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_DICTATORS_SUCCESS:
      return action.dictators;
    default:
      return state;
  }
};

export default dictatorReducer;

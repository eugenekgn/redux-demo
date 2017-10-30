import * as types from './types';

const beginServerCall = () => {
  return {
    type: types.MAKE_SERVER_CALL
  }
}

const serverCallError = () => {
  return {
    type: types.ACTION_SERVER_ERROR
  }
}

export {
  beginServerCall,
  serverCallError
}
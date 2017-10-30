import DictatorApi from '../api/dictatorsApi';
import * as types from './types';
import {beginServerCall} from "./serverStatusActions";

const loadDictatorsSuccess = (dictators) => {
  return {
    type: types.LOAD_DICTATORS_SUCCESS,
    dictators
  };
};

export const loadDictators = () => {
  return (dispatch) => {
    dispatch(beginServerCall());
    return DictatorApi.getAllDictators()
      .then(dictators => {
        dispatch(loadDictatorsSuccess(dictators));
      }).catch(error => {
        throw (error);
      });
  };
};
import { Dispatch } from 'redux';
import { addSearchHistory } from './actions'; 

export const addSearchAsync = (search: any) => {
  return async (dispatch: Dispatch) => {
    dispatch(addSearchHistory(search.description));
  };
};

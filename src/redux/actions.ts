/**
 * Redux action type for selecting a place.
 */
export const SELECT_PLACE = 'SELECT_PLACE';
export const ADD_SEARCH_ASYNC = 'ADD_SEARCH_ASYNC';
export const SEARCH_ERROR = 'SEARCH_ERROR'; 

/**
 * Redux action creator for adding a search history entry.
 * 
 * @param {string} search - The search entry to add to history.
 * @returns {Object} Action object.
 */
export const addSearchHistory = (search: string) => ({
  type: SELECT_PLACE,
  payload: search,
});

export const addSearchAsync = (search: any) => async (dispatch: any) => {
  try {

    dispatch({ type: ADD_SEARCH_ASYNC, payload: search });
  } catch (error) {

    dispatch({ type: SEARCH_ERROR, payload: error });
  }
};
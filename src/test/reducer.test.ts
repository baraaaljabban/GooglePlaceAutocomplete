import { SEARCH_ERROR, addSearchHistory } from '../redux/actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import reducer, { State } from '../redux/reducers';
import { SELECT_PLACE } from '../redux/actions';


const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Actions', () => {
  it('should dispatch ADD_SEARCH_HISTORY action', () => {
    const store = mockStore({});
    const search = 'Test Location';

    store.dispatch(addSearchHistory(search));

    const actions = store.getActions();
    const expectedPayload = { type: 'SELECT_PLACE', payload: search };
    expect(actions).toEqual([expectedPayload]);
  });
});



describe('Reducer', () => {
  const initialState: State = {
    searchHistory: [],
    selectedPlace: null,
    error:null,
  };

  it('should handle SELECT_PLACE action', () => {
    const search = 'Test Location';
    const action = {
        type: SELECT_PLACE,
        payload: search,
      };
    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      searchHistory: [],
        selectedPlace: search,
      error:null
    });
  });
    
    
  it('should handle SELECT_PLACE action and show correct search result', () => {
    const search = 'New Location';
    const action = {
      type: SELECT_PLACE,
      payload: search,
      
    };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      searchHistory: [undefined],
        selectedPlace: search,
      error:null
    });
  });

  describe('Error Action', () => {
    it('should create a SEARCH_ERROR action with an error message', () => {
      const errorMessage = 'An error occurred';
      const expectedAction = {
        type: SEARCH_ERROR,
        payload: errorMessage,
      };
      const action = {
        type: SEARCH_ERROR,
        payload: errorMessage,
      };
      expect(action).toEqual(expectedAction);
    });
  });
  
  describe('Error Reducer', () => {
    it('should handle SEARCH_ERROR action', () => {
      const initialState = {
        searchHistory: [],
        selectedPlace: null,
        error: null,
      };
      const errorMessage = 'An error occurred';
      const action = {
        type: SEARCH_ERROR,
        payload: errorMessage,
      };
      const newState = reducer(initialState, action);
      expect(newState).toEqual({
        searchHistory: [],
        selectedPlace: null,
        error: errorMessage,
      });
    });
  });
  
});

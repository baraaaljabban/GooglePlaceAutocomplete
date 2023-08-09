import {  SELECT_PLACE ,ADD_SEARCH_ASYNC,SEARCH_ERROR} from './actions';

export interface State {
  searchHistory: string[];
  selectedPlace: any; 
  error: string | null; 
}

const initialState: State = {
  searchHistory: [],
  selectedPlace: null,
  error:null,
};
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_SEARCH_ASYNC:
      return {
        ...state,
        searchHistory: [...state.searchHistory, action.payload],
      };
    case SEARCH_ERROR: 
      return {
        ...state,
        error: action.payload,
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: action.payload,
        searchHistory: [...state.searchHistory, action.payload.name],
      };
    default:
      return state;
  }
};
export default reducer;



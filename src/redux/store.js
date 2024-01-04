import { createStore, combineReducers } from "redux";
import initialState from "./initialState";
import listsReducer from "./listsReducer";
import columnsReducer from "./columnsReducer";
import cardsReducer from "./cardsReducer";
import searchFormStringReducer from "./searchFormStringReducer";

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchFormString: searchFormStringReducer,
};

const store = createStore(
  columnsReducer(subreducers),
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

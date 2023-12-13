import { createStore } from "redux";
import initialState from "./initialState";
import shortid from "shortid";
import strContains from "../utils/strContains";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_COLUMN":
      return {
        ...state,
        columns: [...state.columns, { ...action.payload, id: shortid() }],
      };
    case "ADD_CARD":
      return {
        ...state,
        cards: [...state.cards, { ...action.payload, id: shortid() }],
      };
    case "ADD_SEARCH_STRING":
      return {
        ...state,
        searchFormString: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

export const getFilteredCards = ({ cards, searchFormString }, columnId) =>
  cards.filter(
    (card) =>
      card.columnId === columnId && strContains(card.title, searchFormString)
  );

export const getAllColumns = (state) => state.columns;

export const addColumn = (payload) => ({ type: "ADD_COLUMN", payload });

export const addCard = (payload) => ({ type: "ADD_CARD", payload });

export const addSearchString = (payload) => ({
  type: "ADD_SEARCH_STRING",
  payload,
});

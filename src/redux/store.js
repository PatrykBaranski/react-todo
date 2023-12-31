import { createStore } from "redux";
import initialState from "./initialState";
import shortid from "shortid";
import strContains from "../utils/strContains";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_COLUMN":
      return {
        ...state,
        columns: [
          ...state.columns,
          { ...action.payload, id: shortid(), isFavorite: false },
        ],
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
    case "ADD_LIST":
      return {
        ...state,
        lists: [...state.lists, { ...action.payload, id: shortid() }],
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

export const getAllLists = (state) => state.lists;

export const getListById = ({ lists }, id) =>
  lists.find((elem) => elem.id === id);

export const getCardById = ({ cards }, id) =>
  cards.find((card) => card.id === id);

export const getColumnsByList = ({ columns }, listId) =>
  columns.filter((column) => column.listId === listId);

export const addColumn = (payload) => ({ type: "ADD_COLUMN", payload });

export const addCard = (payload) => ({ type: "ADD_CARD", payload });

export const addSearchString = (payload) => ({
  type: "ADD_SEARCH_STRING",
  payload,
});

export const addList = (payload) => ({ type: "ADD_LIST", payload });

export const toggleFavoriteCard = (card) =>
  (card.isFavorite = !card.isFavorite);

export const isFavoriteCard = (card) => card.isFavorite;

export const getFavoriteCards = ({ cards }) =>
  cards.filter((card) => card.isFavorite);

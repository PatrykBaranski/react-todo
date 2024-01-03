import shortid from "shortid";
import strContains from "../utils/strContains";

const ADD_CARD = "app/cards/ADD_CARD";
const DELETE_CARD = "app/cards/DELETE_CARD";

const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];
    case DELETE_CARD:
      console.log(statePart);
      return statePart.filter((card) => card.id !== action.payload.id);
    default:
      return statePart;
  }
};

export default cardsReducer;

export const addCard = (payload) => ({ type: ADD_CARD, payload });

export const deleteCard = (payload) => ({ type: DELETE_CARD, payload });

export const getCardById = ({ cards }, id) =>
  cards.find((card) => card.id === id);

export const getFilteredCards = ({ cards, searchFormString }, columnId) =>
  cards.filter(
    (card) =>
      card.columnId === columnId && strContains(card.title, searchFormString)
  );

export const toggleFavoriteCard = (card) =>
  (card.isFavorite = !card.isFavorite);

export const isFavoriteCard = (card) => card.isFavorite;

export const getFavoriteCards = ({ cards }) =>
  cards.filter((card) => card.isFavorite);

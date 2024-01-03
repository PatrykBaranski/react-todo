import shortid from "shortid";

const ADD_LIST = "app/lists/ADD_LIST";

export const getAllLists = (state) => state.lists;

export const getListById = ({ lists }, id) =>
  lists.find((elem) => elem.id === id);

const listsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_LIST:
      return {
        lists: [...statePart, { ...action.payload, id: shortid() }],
      };
    default:
      return statePart;
  }
};

export const addList = (payload) => ({ type: ADD_LIST, payload });

export default listsReducer;

const ADD_SEARCH_STRING = "app/searchString/ADD_SEARCH_STRING";

const searchFormStringReducer = (statePart = "", action) => {
  switch (action.type) {
    case ADD_SEARCH_STRING:
      return action.payload;
    default:
      return statePart;
  }
};

export const addSearchString = (payload) => ({
  type: ADD_SEARCH_STRING,
  payload,
});

export default searchFormStringReducer;

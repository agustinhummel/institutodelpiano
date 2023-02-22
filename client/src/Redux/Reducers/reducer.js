

const initialState = {
    test:[]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "test":
      return state
    default:
      return state;
  }
}

export default rootReducer;

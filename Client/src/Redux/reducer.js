const inicialState = {
  myFavorites: [],
};

const rootReducer = (state = inicialState, { type, payload }) => {
  switch (type) {
    // case "ADD_FAV":
    //   let copy1 = state.myFavorites
    //   copy1.push(payload)
    //   return { ...state, myFavorites: copy1 };
    case 'ADD_FAV':
      return { ...state, myFavorites: payload, allCharacters: payload };
    // case "REMOVE_FAV":
    //   let copy2 = state.myFavorites.filter(char => {
    //     return char.id !== Number(payload);
    //   });
    //   return {
    //     ...state,
    //     myFavorites: copy2,
    //   };

    case 'REMOVE_FAV':
      return { ...state, myFavorites: payload };

    default:
      return state;
  }
};

export default rootReducer;

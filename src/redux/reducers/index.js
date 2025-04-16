const initialState = {
  favourites: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  // lo scopo del reducer è ritornare sempre il NUOVO stato dell'applicativo
  // il reducer si muove secondo dei BINARI prestabiliti
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload], // Aggiunge l'azienda ai preferiti
        },
      };
    default:
      // ritornare sempre il NUOVO stato dell'applicativo
      return state; // se l'azione è sconosciuta, per NON FARE DANNI
    // il reducer non cambierà niente! crea una biglia identica all'ultima
  }
};

export default mainReducer;

export const ADD_TO_FAVORITES = "ADD_TO_FAVOURITES";

export const addToFavorites = (company) => ({
  type: ADD_TO_FAVORITES,
  payload: company,
});

export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export const removeFromFavorites = (company) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: company,
});

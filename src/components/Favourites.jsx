import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_FROM_FAVORITES, removeFromFavorites } from "../redux/action";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.content);
  const dispatch = useDispatch();

  const handleRemove = (company) => {
    dispatch(removeFromFavorites({ company })); // Usa l'action creator per inviare l'azione
  };

  return (
    <div>
      <h1>Elenco Preferiti</h1>
      <ul className="text-start">
        {favourites.map((company, index) => (
          <li key={index}>
            {company.company}{" "}
            <button onClick={() => handleRemove(company.company)}>
              Rimuovi
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;

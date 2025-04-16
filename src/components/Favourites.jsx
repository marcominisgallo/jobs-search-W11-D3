import React from "react";
import { useSelector } from "react-redux";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.content);

  return (
    <div>
      <h1>Elenco Preferiti</h1>
      <ul className="text-start">
        {favourites.map((company, index) => (
          <li key={index}>{company.company}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;

import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getHeroesById } from "../../selectors/getHeroesById";

export const HeroScreen = ({history}) => {
  const { heroId } = useParams();
  const hero = useMemo(() => getHeroesById(heroId), [heroId]);

  if (!hero) {
    return <Redirect to="/" />;
  }

  const handleReturn = () =>{
      if(history.length <= 2){
          history.push('/');
      } else {
          history.goBack();
      }
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero[0];

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
          src={`../assets/heroes/${heroId}.jpg`}
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter Ego: {alter_ego}</b>
          </li>
          <li className="list-group-item">
            <b>Publisher: {publisher}</b>
          </li>
          <li className="list-group-item">
            <b>First Appearance: {first_appearance}</b>
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>
       <button 
        onClick={handleReturn}
        className='btn btn-outline-info'>
           Return
       </button> 
      </div>
    </div>
  );
};

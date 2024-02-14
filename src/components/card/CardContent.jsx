import React from "react";
import CardRating from "./CardRating";
import heroesData from "../data/data.json";
// Лучше использовать fetch в этом случае или импорт?
// Лучше ли использовать props или через map тоже можно?

function CardContent() {
  return (
    <React.Fragment>
      {heroesData.map((hero) => (
        <div className="card-content">
          <h4 className="card-name">{hero.name}</h4>
          <p>
            <span>Вселенная:</span> {hero.universe}
          </p>
          <p>
            <span>Альтер-эго:</span> {hero.alterego}
          </p>
          <p>
            <span>Профессия:</span> {hero.occupation}
          </p>
          <p>
            <span>Друзья:</span> {hero.friends}
          </p>
          <p>
            <span>Суперсила:</span> {hero.superpowers}
          </p>
          <p class="hero-info">{hero.info}</p>
          <img className="card-image" src={hero.url} alt={hero.name} />
          <CardRating />
        </div>
      ))}
    </React.Fragment>
  );
}

export default CardContent;

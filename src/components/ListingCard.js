import React from "react";

function ListingCard({card}) {
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={card.image} alt={card.description} />
      </div>
      <div className="details">
        {true ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{card.description}</strong>
        <span> · {card.location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

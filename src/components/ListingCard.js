import React, { useState } from "react";

function ListingCard({card, onDeleteCards}) {
  const[like,setLike]= useState(false)
  const[star,setStar]= useState("☆")
  function handleDeleteClick(){
    fetch(`http://localhost:6001/listings/${card.id}`,{
      method: "DELETE",
    })
      .then((r)=>r.json())
      .then(()=> onDeleteCards(card));
  }

  function handleFavorite(){
    if (like === true){
      setLike(false)
      setStar( "☆")
    }
    else{
      setLike(true)
      setStar( "★")
    }
  }
  //☆  ★
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={card.image} alt={card.description} />
      </div>
      <div className="details">
        <button className="emoji-button.favorite" onClick={handleFavorite}>{star}</button>
        <strong>{card.description}</strong>
        <span> · {card.location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

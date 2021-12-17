import React, {useEffect,useState} from "react";
import ListingCard from "./ListingCard"
// import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [cards,setCards] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then((r)=>r.json())
    .then((cards)=> setCards(cards));
  },[]);

  return (
    <main>
      <ul className="cards">
      {cards.map((card)=>{return<ListingCard key={card.id} card={card} />})} 
      </ul>
    </main>
  );
}

export default ListingsContainer;

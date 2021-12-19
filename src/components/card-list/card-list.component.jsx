import React from "react";
import "./card-list.style.css"
import Card from "../card/card.component";


export const CardList = ({monsters}) =>{
    return(
        <div className="card-container">
           {monsters.map((monster)=>{
               return (
                   <Card id={monster.id} name={monster.name}/>
               );
           })}
        </div>
    ); 
}
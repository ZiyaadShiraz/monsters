import React from "react"
import "./card.style.css"

class Card extends React.Component{
    constructor(){
        super(); 
    }
    render(){
        return(
            <div className="card">
                <img width="70%" src={`https://robohash.org/${this.props.id}`}/>
                <h1 key={this.props.id} >{this.props.name}</h1>
            </div>
        ); 
    }
}

export default Card; 
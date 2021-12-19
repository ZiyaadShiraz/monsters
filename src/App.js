import './App.css';
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
var API_ENDPOINT = "https://jsonplaceholder.typicode.com/users"; 




class App extends Component{

  constructor(){
    super(); 
    this.state = {
    monsters:[], 
    searchField: ""
    }
  }

 async componentDidMount(){
    let monsterData = await fetch(API_ENDPOINT); 
    let monsterDataAsJson = await monsterData.json(); 
    this.setState({monsters: monsterDataAsJson})
  }

  render(){
    let {monsters, searchField} = this.state; 
    if(searchField.length>0){
      monsters = monsters.filter(monster=> monster.name.toLowerCase().includes(searchField.toLowerCase()));
    }
    return(
      <div>
        <h1 className="title">Monsters Rolodex</h1>
        <input className="search-field" type="search" placeholder="search monsters" onChange={(e)=>{
           let input = e.target; 
           this.setState({searchField: input.value}, ()=>{
             console.log(this.state);
           })
           
        }}/>
      <CardList monsters = {monsters}/>
      {
        monsters.length===0 && <h1>{`No data found ${searchField}`}</h1>
      }
    
      </div>
    )
  }
}





export default App;

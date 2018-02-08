import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StarList from './components/StarList';
import SWAPI from './components/SWAPI';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      swapiResults: [],
      starList: [
      
        {name: 'Fomalhaut', diameter: '2mi'}, 
        {name: 'Elnath', diameter: '3.6MM mi'}, 
        {name: 'Gacrux', diameter: '117MM mi'}, 
        {name: 'Deneb', diameter: '175MM mi'}
    ]

    }
  }
  //Like JQ OnReady
  componentDidMount() {
    this.getPlanets();
  }
  getPlanets() {
    axios.get('https://swapi.co/api/planets?/format=json')
    .then((response)=> {
      console.log(response);
      this.setState({swapiResults: response.data.results});
    })
    .catch((error)=> {
      alert('OH NO!');
    });
  }
  render() {
   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
           <StarList starList={this.state.starList}/>
        </div>
        <div>
        <SWAPI swapiResults={this.state.swapiResults}/>
        </div>
      </div>
    );
  }
}

export default App;

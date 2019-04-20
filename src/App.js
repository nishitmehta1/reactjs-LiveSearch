import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/SearchBox.js';
import List from './components/List.js';
class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			search: ''
		}
	};
	handleChange = val =>{
		console.log(this.state.search)
		this.setState({
			search: val
		});
	}
  render() {
  		let fullList = [
		'India',
		'United State of America',
		'New Zealand',
		'Sri Lanka',
		'Dubai',
		'China',
		'Brazil',
		'Canada',
		'Mexico',
		'Spain',
		'England',
		'France',
		'Germany',
		'Portugal'
	];
	
	let listToDisplay = fullList.filter(
		(country) => {
			return country.toLowerCase().indexOf(this.state.search) !== -1; 
		}
	);

    return (
      <div className="App">
       <SearchBox handleChange={this.handleChange} value={this.state.search}></SearchBox>
       <ul className="list-group">
       	{listToDisplay.map((country) => {
			return <List>{country}</List>
       	})}
       </ul>
      </div>
    );
  }
}

export default App;

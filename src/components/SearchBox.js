import React, { Component } from 'react';
import './search.css';

class SearchBox extends Component {
  handleChange = event => {
	const value = event.target.value;
	this.props.handleChange(value)
  }
  render() {
    return (
      <div className="search input-group">
       <input value={this.props.value} onChange={this.handleChange.bind(this)} type="search" className="" placeholder="Search"/>
      </div>
    );
  }
}

export default SearchBox;
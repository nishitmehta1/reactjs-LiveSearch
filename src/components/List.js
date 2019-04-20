import React, { Component } from 'react';
import './list.css';

class List extends Component {
  render() {
    return (
      <div className="list">
		<li className="list-group-item" key={this.props.children}>{this.props.children}</li>
      </div>
    );
  }
}

export default List;

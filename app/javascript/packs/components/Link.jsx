// Because Link from 'react-router-dom' sucks in 'react-router-redux' I've reinveted own Link
// Why it sucks? It is not compatible to 5.0.0 of react-router-redux and won't work without spikes
// so for my projects I use <Link> emulation, which pushes url to store and has backward compability as usual <a>
import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { store } from '../app';

class Link extends Component {
  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this);
  }
  
  navigate(event) {
    event.preventDefault();
    store.dispatch(push(this.props.to))
  }

  render() { 
    return (<a onClick={this.navigate} href={this.props.to} className={this.props.className}>{this.props.children}</a>)
  }
}
 
export default Link;
import React from 'react';
import './App.css';

export class ImageBox extends React.Component {
    constructor() {
      super()

      this.state = {
        open: false
      }
    }

    toggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            open: this.state.open ? false : true
        })    
    }

    getCover = () => {
        return <img className="cover" src={this.props.cover} alt={"cover"}/>
    }

    getContent = () => {
        return <img className="content" src={this.props.content} alt={"content"}/>
    }
  
    render() {
      return (
        <div className="item-box" onClick={this.toggle}>
            {this.state.open ? this.getContent() : this.getCover()}
        </div>
      );
    }
  }
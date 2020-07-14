import React from 'react';
import './App.css';
import { thisExpression } from '@babel/types';

export class ImageBox extends React.Component {
    constructor() {
      super()

      this.state = {
        open: false,
      }
    }

    toggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            open: this.state.open ? false : true
        })    
    }
  
    render() {
      return (
        <div className="item-box" onClick={this.toggle}>
            {this.state.open ? 
                <img className="cover" src={this.props.content} alt={"content"}/> :
                <img className="content" src={this.props.cover} alt={"cover image"}/>
            }
        </div>
      );
    }
  }
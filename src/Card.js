import React from 'react';
import './Card.css';

export class Card extends React.Component {
    constructor() {
      super()

      this.state = {
        selected: false
      }
    }

    flip = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            flipped: !this.state.flipped
        });
    }

    render() {
      return (
        <div className="card-wrapper" onClick={this.props.onClick}>
          <div className={`card${this.state.selecting ? " is-selected" : ""}`}>
            <img 
              className="card-face front"
              src={this.props.cover} alt={"front"}/>
            <img 
              className="card-face back"
              src={this.props.content} alt={"back"}/>
          </div>
        </div>
      );
    }
  }
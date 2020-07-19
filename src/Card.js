import React from 'react';
import './Card.css';

export class Card extends React.Component {
    constructor() {
      super()

      this.state = {
        flipped: false,
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
        <div className="card-wrapper" onClick={this.flip}>
          <div className={`card${this.state.flipped ? " is-flipped" : ""}`}>
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
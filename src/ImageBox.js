import React from 'react';
import './App.css';

export class ImageBox extends React.Component {
    constructor() {
      super()

      this.state = {
        open: false,
      }
    }

    open = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("open");
    }
  
    render() {
      return (
        <div className="image-box">
            <img 
                className="image" 
                src={this.props.imageSrc} 
                alt={this.props.description}
                onClick={this.open}
            />
        </div>
      );
    }
  }
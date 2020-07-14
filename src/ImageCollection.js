import React from 'react';
import './App.css';
import { ImageBox } from './ImageBox';

export class ImageCollection extends React.Component {
    constructor() {
      super()

      this.state = {
        images: [
          "https://i.pinimg.com/originals/22/27/c0/2227c0567796bde1273dc37874ebcea2.png",
          "https://i.pinimg.com/originals/22/27/c0/2227c0567796bde1273dc37874ebcea2.png",
          "https://i.pinimg.com/originals/22/27/c0/2227c0567796bde1273dc37874ebcea2.png",
          "https://i.pinimg.com/originals/22/27/c0/2227c0567796bde1273dc37874ebcea2.png",
          "https://i.pinimg.com/originals/22/27/c0/2227c0567796bde1273dc37874ebcea2.png",
          "https://i.pinimg.com/originals/22/27/c0/2227c0567796bde1273dc37874ebcea2.png",
          "https://i.pinimg.com/originals/22/27/c0/2227c0567796bde1273dc37874ebcea2.png",
          "https://i.pinimg.com/originals/22/27/c0/2227c0567796bde1273dc37874ebcea2.png",
          "https://i.pinimg.com/originals/22/27/c0/2227c0567796bde1273dc37874ebcea2.png",
          "https://i.pinimg.com/originals/22/27/c0/2227c0567796bde1273dc37874ebcea2.png",
          "https://i.pinimg.com/originals/22/27/c0/2227c0567796bde1273dc37874ebcea2.png",
          "https://i.pinimg.com/originals/22/27/c0/2227c0567796bde1273dc37874ebcea2.png"
        ],
      }
    }
  
    render() {
      return (
        <div className="image-collection">
          {this.state.images.map(img => {
            return <ImageBox imageSrc={img} description={"description"}/>
          })}
        </div>
      );
    }
  }
import React from 'react';
import './App.css';
import { Card } from './Card';

export class CardCollection extends React.Component {
    constructor() {
      super()

      this.state = {
        data: [
          ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/166f59e9-66e4-4215-bf28-f772832d0922/dccjo0j-142d0303-126b-4f82-87ff-ad06768a764f.png", "https://i.pinimg.com/originals/22/27/c0/2227c0567796bde1273dc37874ebcea2.png"],
          ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/166f59e9-66e4-4215-bf28-f772832d0922/dccjo0j-142d0303-126b-4f82-87ff-ad06768a764f.png", "https://i.pinimg.com/originals/22/27/c0/2227c0567796bde1273dc37874ebcea2.png"],
          ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/166f59e9-66e4-4215-bf28-f772832d0922/dccjo0j-142d0303-126b-4f82-87ff-ad06768a764f.png", "https://i.pinimg.com/originals/22/27/c0/2227c0567796bde1273dc37874ebcea2.png"],
          ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/166f59e9-66e4-4215-bf28-f772832d0922/dccjo0j-142d0303-126b-4f82-87ff-ad06768a764f.png", "https://i.pinimg.com/originals/22/27/c0/2227c0567796bde1273dc37874ebcea2.png"],
          ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/166f59e9-66e4-4215-bf28-f772832d0922/dccjo0j-142d0303-126b-4f82-87ff-ad06768a764f.png", "https://i.pinimg.com/originals/22/27/c0/2227c0567796bde1273dc37874ebcea2.png"],
          ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/166f59e9-66e4-4215-bf28-f772832d0922/dccjo0j-142d0303-126b-4f82-87ff-ad06768a764f.png", "https://i.pinimg.com/originals/22/27/c0/2227c0567796bde1273dc37874ebcea2.png"],
          ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/166f59e9-66e4-4215-bf28-f772832d0922/dccjo0j-142d0303-126b-4f82-87ff-ad06768a764f.png", "https://i.pinimg.com/originals/22/27/c0/2227c0567796bde1273dc37874ebcea2.png"],
          ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/166f59e9-66e4-4215-bf28-f772832d0922/dccjo0j-142d0303-126b-4f82-87ff-ad06768a764f.png", "https://i.pinimg.com/originals/22/27/c0/2227c0567796bde1273dc37874ebcea2.png"],
          ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/166f59e9-66e4-4215-bf28-f772832d0922/dccjo0j-142d0303-126b-4f82-87ff-ad06768a764f.png", "https://i.pinimg.com/originals/22/27/c0/2227c0567796bde1273dc37874ebcea2.png"],
          ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/166f59e9-66e4-4215-bf28-f772832d0922/dccjo0j-142d0303-126b-4f82-87ff-ad06768a764f.png", "https://i.pinimg.com/originals/22/27/c0/2227c0567796bde1273dc37874ebcea2.png"],
          ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/166f59e9-66e4-4215-bf28-f772832d0922/dccjo0j-142d0303-126b-4f82-87ff-ad06768a764f.png", "https://i.pinimg.com/originals/22/27/c0/2227c0567796bde1273dc37874ebcea2.png"],
          ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/166f59e9-66e4-4215-bf28-f772832d0922/dccjo0j-142d0303-126b-4f82-87ff-ad06768a764f.png", "https://i.pinimg.com/originals/22/27/c0/2227c0567796bde1273dc37874ebcea2.png"]
        ],
      }
    }
  
    render() {
      return (
        <div className="card-collection">
          {this.state.data.map((item, i) => {
            return <Card key={i} cover={item[0]} content={item[1]}/>
          })}
        </div>
      );
    }
  }
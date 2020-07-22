import React from 'react';
import './CardCollection.css';
import { SelectedCard } from './SelectedCard';
// import { Card } from './Card';

export class CardCollection extends React.Component {
    constructor() {
      super()

      this.state = {
        selected: -1,
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

    componentDidMount(){
      document.addEventListener("keydown", this.escFunction, false);
    }
    componentWillUnmount(){
      document.removeEventListener("keydown", this.escFunction, false);
    }

    escFunction = (e) => {
      if (e.keyCode === 27 && this.state.selected !== -1) {
        this.setState({ selected: -1 });
      }
    }

    select = (e, i) => {
      e.preventDefault();
      e.stopPropagation();
      this.setState({ selected: i });
      console.log("clicked", i, this.state.selected);
    }
  
    render() {
      let selected = (this.state.selected === -1) ? undefined : this.state.data[this.state.selected];
      return (
        <div className="card-collection" onClick={this.handleOutsideClick}>
          {this.state.data.map((item, i) => {
            // return <Card key={i} cover={item[0]} content={item[1]} onClick={() => console.log("clicked", i)}/>
            return (
              <div className="card-wrapper" key={i} onClick={(e) => this.select(e, i)}>
                {/* <div className={`card${this.state.selected === i ? " is-selected" : ""}`}> */}
                <div className={`card${this.state.selected === i ? "" : ""}`}>
                  <img className="cover-image" src={item[0]} alt={"cover"}/>
                </div>
              </div>
          )})}
          {this.state.selected === -1 ? null : 
            <SelectedCard front={selected[0]} back={selected[1]}/>
          }
        </div>
      );
    }
  }
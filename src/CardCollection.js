import React from 'react';
import './CardCollection.css';
import { SelectedCard } from './SelectedCard';
import party from './media/back/Party.jpeg';
import dad from './media/back/Dad.jpeg';
import frozen from './media/back/Frozen.jpeg';
import hot from './media/back/Hot.jpeg';
import pembroke from './media/back/Pembroke.jpeg';
import singapore from './media/back/Singapore.jpeg';

import cs from './media/back/CS.jpeg';
import beer from './media/front/Beer.png';
import fire from './media/front/Fire.png';
import grandpa from './media/front/Grandpa.png';
import nerd from './media/front/Nerd.png';
import flag from './media/front/Singapore.png';
import snowman from './media/front/Snowman.png';
import house from './media/front/House.png';
// import pepe from './media/front/Pepe.png';

import a from './media/photos/A.png';
import b from './media/photos/B.jpg';
import c from './media/photos/C.jpg';
import d from './media/photos/D.jpg';
import e from './media/photos/E.jpg';

export class CardCollection extends React.Component {
    constructor() {
      super()

      this.state = {
        selected: -1,
        data: [
          [beer, party],
          [a],
          [grandpa, dad],
          [b],
          [c],
          [flag, singapore],
          [d],
          [snowman, frozen],
          [fire, hot],
          [e],
          [house, pembroke],
          [nerd, cs],
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

      if (i === 0) {
        const audio = document.getElementsByClassName("audio-element")[0];
        audio.play();
      }
    }

    unselect = () => {
      this.setState({ selected: -1 })
    }
  
    render() {
      let selected = (this.state.selected === -1) ? undefined : this.state.data[this.state.selected];
      return (
        <div className="card-collection" onClick={this.handleOutsideClick}>
          {this.state.data.map((item, i) => {
            let flippable = item.length > 1;
            return (
              <div className={`card-wrapper${flippable ? " flippable" : ""}`} key={i} onClick={flippable ? (e) => this.select(e, i) : null}>
                <div className="card">
                  <img className="cover-image" src={item[0]} alt={"cover"}/>
                </div>
              </div>
          )})}
          {this.state.selected === -1 ? null : 
            <SelectedCard front={selected[0]} back={selected[1]} unselect={this.unselect}/>
          }
          <audio 
            className="audio-element" 
            ref={React.createRef()} 
            src={require("./media/Taylor_Swift_22.mp3")}
            loop={true}/>
        </div>
      );
    }
  }
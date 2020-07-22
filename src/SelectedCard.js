import React from 'react';
import './SelectedCard.css';

export class SelectedCard extends React.Component {
    constructor() {
      super()

      this.state = {
        style: ""
      }
    }

    componentDidMount(){
        console.log("timeout starte");
        setTimeout(() => {
            document.getElementById("selected-card").style.transform = "rotateY(180deg)";
            console.log("rotated");
        }, 500);
    }

    render() {
      return (
        <div className="screen-wrapper">
            <div className="selected-card-wrapper">
                <div className="selected-card" id="selected-card">
                    <img 
                        className="card-face front"
                        src={this.props.front} alt={"front"}/>
                    <img 
                        className="card-face back"
                        src={this.props.back} alt={"back"}/>
                </div>
            </div>
        </div>
      );
    }
  }
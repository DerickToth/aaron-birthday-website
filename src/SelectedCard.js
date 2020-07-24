import React from 'react';
import './SelectedCard.css';

export class SelectedCard extends React.Component {
    componentDidMount() {
        document.addEventListener("click", this.handleClick);

        console.log("timeout starte");
        setTimeout(() => {
            document.getElementById("selected-card").style.transform = "rotateY(180deg)"; // flip card over
            console.log("rotated");
        }, 500);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleClick);
    }

    handleClick = (e) => {
        if (this.card.contains(e.target)) { 
            // click is inside card, so ignore
            return;
        }
        // click is outside of card, so close the card
        e.preventDefault();
        e.stopPropagation();
        this.props.unselect();
    }

    render() {
      return (
        <div className="screen-wrapper">
            <div className="selected-card-wrapper" ref={card => this.card = card}>
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
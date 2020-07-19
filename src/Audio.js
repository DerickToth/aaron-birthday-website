import React from 'react';
import './App.css';

export class Audio extends React.Component {
    constructor() {
      super()

      this.state = {
        muted: false
      }
    }

    toggleAudio = () => {
      const audio = document.getElementsByClassName("audio-element")[0];
      console.log(audio.muted);
      audio.muted = !audio.muted 
      console.log("after", audio.muted);
      this.setState({
        muted: audio.muted
      })
    }

    render() {
      return (
        <div className="audio">
            <img 
              className="mute-icon"
              src={this.state.muted ? require("./media/Mute_Icon.png") : require("./media/Unmute_Icon.png")}
              alt={this.state.muted ? "unmute" : "mute"}
              onClick={this.toggleAudio}/>
            <audio 
              className="audio-element" 
              ref={React.createRef()} 
              // src={require("./media/Toilet.mp3")}
              src={require("./media/Taylor_Swift_22.mp3")}
              autoPlay={true}
              loop={true}
              muted={false}/>
        </div>
      );
    }
  }
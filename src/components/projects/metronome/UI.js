import React from 'react'
import { Link } from 'react-router-dom'

import CustomDropdown from './CustomDropdown'
import './slider.css'

export default function Tempo({ 
  bpm, 
  setBpm, 
  startClick, 
  tapTempo, 
  light, 
  isPlaying, 
  soundEffect, 
  setSoundEffect,
}) {

const renderInput = () => {
  return (
    <input 
      type="number" 
      className={`bpm-display ${!light && isPlaying ? `flash`: ``}`}
      value={bpm} 
      min="40" max="220" 
      onChange={(e) => setBpm(Number(e.target.value))}
  />
  )
}

const renderRangeSelector = () => {
  return (
    <input 
      className="bpm-range" 
      type="range" 
      min="40" 
      max="220" 
      value={bpm} 
      onChange={(e)=> {setBpm(Number(e.target.value))}}/>
  )
}
  
return (

  <div className="global-container">
    <div className="text-box">
      <h3>My metronome application<hr/></h3>
      <p>
      This simple metronome is my first completed project.It has all the functionality you would expect from a hand-held physical metronome, with a few notable additions.<br /><br />
      The BPM or "beats per minute" display shows the selected tempo and flashes with every beat as a visual  aid for situations where sounds cannot be emitted or heard.<br /><br />
      The most interesting part of working out the mechanics of this functionality was the "Tap Tempo" button that allows the user to automatically calculate the tempo of a piece of music by clicking in rhythm with the audio they are listening to.
      This is a very useful tool for musicians who need to quickly transcribe and reproduce the tempo of a particular piece. <br /><br />
      At the bottom, a dropdown menu allows for the user to choose different sound effects. I have extensive knowledge of Logic Pro X which allowed me to create these samples myself.
      </p>
      <br />
      <Link className="metro-link-btn" to="/"> Back to the homepage</Link>
    </div>
    <div className="metro-box">
      <div className="metro-title" >
        <h1 className="small-title">
          <i className="play icon"></i>
            METRONOME
        </h1>
      </div>
          {renderInput()}
          <div className={`bpm-display-bg ${!light && isPlaying ? `pulse`: ``}`}></div>
          <label value="tempo selection slider"></label>
          {renderRangeSelector()}
            <button className="metro-btn" onClick={() => setBpm(bpm - 1)} >
              <i className="angle double left icon"></i>
            </button>
            <button className="metro-btn" onClick={startClick}>
              <i className={`${isPlaying ? `pause`: `play`} icon`}></i>
            </button>
            <button className="metro-btn" onClick={() => setBpm(bpm + 1)} >
              <i className="angle double right icon"></i>
            </button>
            <br />
          <button className="metro-btn tap"  onClick={tapTempo}>
            Tap
          </button>
            <label value="sound selection"></label>
            <CustomDropdown className="custom-select"
              handleSoundSelect={setSoundEffect}
              soundEffect={soundEffect}
            />
    </div>
  </div>
 )
}

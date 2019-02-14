import React, { Component } from 'react';
import './Cover.css';
import './bootstrap.css'



class Cover extends Component {
  render() {
    return (
        <div>

        <div class="background">
        </div>
        <div class="background-after">
        </div>
            
        <div class="header-content-wrap">
            <div class="row no-gutter header-toprow">
                <div class="header-eye-text">the eye</div>
                <div class="header-special-ed-text">Special Edition</div>
            </div>
            <div class="header-toprow-divider"></div>
            <div class="header-title">The 1968 Issue<div class="header-byline"><p>Written by the Eye Staff</p><p>Designed by Spec Product Design</p><p>Developed by SpecTech</p></div></div>
            
        <div class="header-next">
        <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/O6TYOAY5BVESJGJ5UZDW353CHE.png"></img></div>    
        </div>
        </div>
        
       
        );
    }
}


export default Cover;

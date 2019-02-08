import React from 'react'
import classes from './imageButton.module.css'

const imageButton = (props) =>{

	//expection props.src, props.name

	return(
		<div className={classes.imageBlock}>
    		<div className = {classes.profileDivStyle}>
    			<img src={props.src}
    			className = {classes.profilePicStyle} />
    		</div>
    		<div className={classes.name}> {props.name} </div>
		</div>
	)
}

export default imageButton;
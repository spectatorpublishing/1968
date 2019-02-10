
import React, {Component} from 'react'
import classes from './Part2.module.css'

class Part2 extends Component{

    state = {
        
    }

    onToggleInfo = () => {

    }

	render(){
        const profileDivStyle = {
            borderStyle:"solid", 
            borderColor: "white", 
            borderWidth:"2px", 
            display: "inline-block"
        }

        const profilePicStyle = {
            maxWidth: "100%",
            maxHeight: "100%"
        }

		return(
            <div className={classes.Container}>
                <div className={classes.columns}>
                    <div className ={classes.title}>
                        <p>PART II: Profiles</p>  
                    </div>
                    <div className={classes.border}></div>
                    {/*<!--<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/900px-Flag_of_Uganda.svg.png" style="width:170px;height:190px;margin-left:2vw; margin-right: 0.7vw; padding-bottom:0px;">-->*/}
                    <div className={classes.infoText} >
                        This past month, we set our staff on the mission of capturing the lived legacy of activism at Columbia in the fifty years since 1968. By talking to activists of differents moments and movements, we sought to answer a series of questions: Who is the “Columbia activist”? In what ways has 1968 served as a touchstone for activists past and present? How has the Columbia activist evolved since then? And what becomes of the Columbia activist after they leave campus? We invite you to dive into the stories and struggles of your time, and the times before you, and maybe even the times after you.  
                    </div>      
                </div>
            </div>
		)
	}
}

export default Part2
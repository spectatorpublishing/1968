import React, {Component} from 'react'
import ImageButton from './ImageButton/ImageButton'

const rowStyle = {
	display: "flex",
    flexFlow: "wrap",
    justifyContent: "space-around",
    marginBottom: "2vw"
}

class ImageRow extends Component{
	state = {
		name: null,
		info: null
	}

	render(){
		return (
			<div>
			<div style = {rowStyle}>
				{
					this.props.data.map(info =>
						<ImageButton 
							key = {info.label}
							src = {info.src} name = {info.name}
							clicked = {() => this.onToggleInfo(info.label)}/>
					)
				}
			</div>

			{this.state.info}
		    
			</div>
		)
	}

	onToggleInfo = (name) =>{
		const lastName = this.state.name
		const lastInfo = this.state.info
		let info = null;

		if ((lastName!=name) || (lastInfo==null)){
			info = this.props.data.filter(i => i.label==name)[0].text
		}

		this.setState({
			info: info,
			name: name
		})
	}
}

export default ImageRow;

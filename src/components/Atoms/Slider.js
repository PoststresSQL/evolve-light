import React from 'react'
import Flickity from 'flickity'
import 'flickity/dist/flickity.min.css'

class Slider extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			flickityReady: false
		}
	}

	componentDidMount() {
		const flkty = new Flickity('.main-carousel', {
			autoPlay: 1500,
			wrapAround: true,
			contain: true,
			prevNextButtons: false
		})

		flkty.playPlayer()
	}

	render() {
		return <div className='main-carousel'>{this.props.children}</div>
	}
}

export default Slider

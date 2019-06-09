import React from 'react'
import Flickity from 'flickity'
import 'flickity/dist/flickity.min.css'

class TestimonialsSlider extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			flickityReady: false
		}
	}

	componentDidMount() {
		const flkty = new Flickity('.slides', {
			autoPlay: 3000,
			wrapAround: true,
			contain: true,
			prevNextButtons: false
		})

		flkty.playPlayer()
	}
	render() {
		return (
			<section className='text-center'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-10 offset-md-1'>
							<h2 className='bold'>{this.props.title}</h2>
						</div>
						<div className='col-md-8 col-sm-10 offset-md-2 offset-sm-1'>
							<div className='slider' data-paging='true'>
								<ul className='slides'>
									{this.props.children}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default TestimonialsSlider

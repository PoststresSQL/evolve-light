import React from 'react'

function AccordionMap1({ address, switched, children }) {
	return (
		<section
			className={
				switched ? 'switchable switchable--switch' : 'switchable'
			}>
			<div className='container'>
				<div className='row'>
					<div className='col-sm-6 switchable__text'>
						<ul className='accordion accordion-1'>{children}</ul>
					</div>
					<div className='col-md-5 col-sm-6'>
						<div
							className='map-container border--round'
							data-maps-api-key='AIzaSyCfo_V3gmpPm1WzJEC9p_sRbgvyVbiO83M'
							data-address={address}
							data-marker-title='Stack'
							data-map-style='[{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}]'
							data-map-zoom='15'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AccordionMap1

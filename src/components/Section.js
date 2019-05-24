import React from 'react'

function Section({ id, classes, children }) {
	return (
		<section
			id={`${id}__section`}
			className={classes ? classes.join(' ') : ''}>
			<div className='container'>
				<div className='row'>{children}</div>
			</div>
		</section>
	)
}

export default Section

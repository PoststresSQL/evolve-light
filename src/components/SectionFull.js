import React from 'react'

function SectionFull({ id, classes, children }) {
	return (
		<section
			id={`${id}__section`}
			className={classes ? classes.join(' ') : ''}>
			<div className='container-fluid'>
				<div className='row'>{children}</div>
			</div>
		</section>
	)
}

export default SectionFull

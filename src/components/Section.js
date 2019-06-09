import React from 'react'

function Section({ id, className, children }) {
	return (
		<section id={id} className={className}>
			<div className='container'>
				<div className='row'>{children}</div>
			</div>
		</section>
	)
}

export default Section

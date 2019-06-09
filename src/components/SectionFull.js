import React from 'react'

function SectionFull({ id, className, children }) {
	return (
		<section id={id} className={className}>
			<div className='container-fluid'>
				<div className='row'>{children}</div>
			</div>
		</section>
	)
}

export default SectionFull

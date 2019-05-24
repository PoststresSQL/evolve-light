import React from 'react'

function AccordionItem({ active, title, children }) {
	return (
		<li className={active ? 'active' : ''}>
			<div className='accordion__title'>
				<span className='h5'>{title}</span>
			</div>
			<div className='accordion__content'>{children}</div>
		</li>
	)
}

export default AccordionItem

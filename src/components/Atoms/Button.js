import React from 'react'
import { Link } from 'react-router-dom'

function Button({ pathName, className, children }) {
	return (
		<Link to={`/${pathName}`} className={className}>
			<span className='btn__text'>{children}</span>
		</Link>
	)
}

export default Button

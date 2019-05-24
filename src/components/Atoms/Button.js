import React from 'react'
import { Link } from 'react-router-dom'

function Button({ pathName, primary, children }) {
	return (
		<Link
			to={`/${pathName}`}
			className={primary ? `btn btn--primary` : `btn`}>
			<span className='btn__text'>{children}</span>
		</Link>
	)
}

export default Button

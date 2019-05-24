import React from 'react'
import { Link } from 'react-router-dom'

function NavLink({ title, path }) {
	return (
		<li>
			<Link to={path} title={title}>
				{title}
			</Link>
		</li>
	)
}

export default NavLink

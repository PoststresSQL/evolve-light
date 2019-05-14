import React from 'react'
import { Link } from 'react-router-dom'
import NavLink from './NavLink'
import DropdownNavLink from './DropdownNavLink'

function NavBar({ routes }) {
	return (
		<div className='nav-container'>
			<div className='bar bar--sm visible-xs' />
			<nav id='menu1' className='bar bar-1 hidden-xs'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-2 col-sm-3 hidden-xs'>
							<div className='bar__module'>
								<Link to='/'>
									<img
										src='https://placehold.it/150x80'
										alt='logo'
										className='logo logo-dark'
									/>
									<img
										src='https://placehold.it/150x80'
										alt='logo'
										className='logo logo-light'
									/>
								</Link>
							</div>
						</div>

						<div className='col-md-10 col-sm-9 text-right text-left-sm text-left xs'>
							<div className='bar__module'>
								<ul className='menu-horizontal text-left'>
									{routes.map((route, i) => {
										console.log(route)
										// if (route.subroutes) {
										// 	return (
										// 		<DropdownNavLink
										// 			key={i}
										// 			{...route}
										// 		/>
										// 	)
										// } else {
										// 	return (
										// 		<NavLink key={i} {...route} />
										// 	)
										// }
									})}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default NavBar

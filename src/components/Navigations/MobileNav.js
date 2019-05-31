import React from 'react'
import { Link } from 'react-router-dom'
import NavLink from './NavLink'
import DropdownNavLink from './DropdownNavLink'
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome'

class MobileNav extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			routes: props.routes
		}
	}

	toggleMenu = () => {
		let mobileNav = document.querySelector('.mobi-nav-container')
		mobileNav.classList.remove('show')
	}

	render() {
		return (
			<div className='mobi-nav-container'>
				<div>
					<div>
						<Link to='/'>
							<img
								src='https://placehold.it/150x80'
								alt='logo'
								className='logo'
							/>
						</Link>
					</div>
					<ul>
						{this.props.routes.map((route, i) => {
							if (route.subroutes) {
								return <DropdownNavLink key={i} {...route} />
							} else {
								return <NavLink key={i} {...route} />
							}
						})}
					</ul>
					<FAI icon='times' size='2x' onClick={this.toggleMenu} />
				</div>
			</div>
		)
	}
}

export default MobileNav

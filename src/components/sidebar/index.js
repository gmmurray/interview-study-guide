import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './styles.scss';

const renderChildren = (children, parent) => {
	if (children) {
		return (
			<ul>
				{children.map((link, index) => {
					return (
						<li key={index}>
							<HashLink to={`/${parent}#${cleanIdString(link)}`}>
								{link}
							</HashLink>
						</li>
					);
				})}
			</ul>
		);
	}
	return '';
};

const cleanIdString = id => {
	return id.replace(/\s+/g, '-').toLowerCase();
};

const Sidebar = props => {
	const { links } = props;
	return (
		<aside className="menu sidebar">
			<p className="menu-label">NAVIGATION</p>
			<ul className="menu-list">
				{links.map((link, index) => {
					return (
						<li key={index}>
							<NavLink
								to={`/${link.name}`}
								activeClassName="is-active"
							>
								{link.name}
							</NavLink>
							{renderChildren(link.children, link.name)}
						</li>
					);
				})}
			</ul>
		</aside>
	);
};

export default Sidebar;

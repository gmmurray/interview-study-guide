import React, { Component } from 'react';

export default class Home extends Component {
	render() {
		return (
			<section className="hero is-small is-fullheight">
				<div className="hero-body">
					<div className="container">
						<h1 className="title is-size-1">
							Technical Interview Study Guide
						</h1>
						<h1 className="subtitle">
							Do you aspire to be a software developer?
						</h1>
						<h1 className="subtitle">
							Are you looking for an internship or entry level
							position?
						</h1>
						<h1 className="subtitle">
							Do you have a a big (possibly technical) interview
							coming up?
						</h1>
						<p>
							This website is your resource for conquering that
							interview. No promises of course, but this is at
							least a good place to start.
						</p>
					</div>
				</div>
			</section>
		);
	}
}

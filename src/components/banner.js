import React from 'react';

const Banner = (props) => (
	<section 
		className="banner"
		style={{
			backgroundColor: props.bgColor
		}}
		>
		<div
		style={{
		margin: '0 auto',
		maxWidth: 1200,
		padding: '0px 1.0875rem 1.45rem',
		paddingTop: 0,
		textAlign: 'center',
		}}
		>
			The banner {props.bgColor}
		</div>
	</section>
)

export default Banner;
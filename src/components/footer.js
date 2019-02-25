import React from 'react';
import { Link } from 'gatsby'

const Footer = (props) =>(
	<section style={{
		background: props.bgColor,
		padding: '3em 0',
	}}>
	<div style={{
		color: '#ffffff',
		maxWidth: 1200,
		margin: '0 auto',
		padding: '0px 1.0875rem 1.45rem',
	}}>
		Address

		By using this website you agree with our Cookies Policy, Private Policy and Terms and Conditions.

		Website design and build by
	</div>
	</section>
)

export default Footer
import React, { Component } from 'react'
import { Link, graphql } from "gatsby"

import "../components/layout.css"

class Home extends Component{
	render (){
		const data = this.props.data

		return (
			<div>
			  <h1>Index heading</h1>
			  <h4>Pages</h4>
			  
			  {data.allWordpressPage.edges.map(({ node }) => (
				  <div key={node.slug}> 
				  <Link to={node.slug} css={{ textDecoration: `none` }}>
						<p>{node.title}</p>
					</Link>
					<div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
				  </div>
				))}
				
				<h1>Posts</h1>
				{data.allWordpressPost.edges.map(({ node }) => (
					<div key={node.slug}>
						<Link to={node.slug} css={{ textDecoration: `none` }}>
						<h3>{node.title}</h3>
						</Link>
						<div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
					</div>
				  ))}
			</div>
		)
	}
}

export default Home

  export const pageQuery = graphql`
  query{
	allWordpressPage {
		edges {
			node {
				id
				slug
				title
				content
				excerpt
				date
				modified
			}
		}
	}
		allWordpressPost(sort: { fields: [date] }) {
      		edges {
        		node {
          		title
          		excerpt
          		slug
        		}
      		}
    	}
	}
`

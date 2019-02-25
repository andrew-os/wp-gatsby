import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Banner from "../components/banner"
import Sidebar from "../components/sidebar"
import Footer from "../components/footer"

class PageTemplate extends Component {
  render() {
	  const currentPage = this.props.data.wordpressPage
	  console.log(currentPage)


    return (
		<div>
		<Banner bgColor="#eea642" />
		<Layout>

			<div className="row">
				<div className="col-sm-8">
					<h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
					<div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
				</div>

				<div className="col-sm-4">
					<Sidebar />
				</div>
			</div>


		</Layout>
		<Footer bgColor="#231001" />
		</div>

    )
  }
}
export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
	  acf{
		  first_title
	  }
    }
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`



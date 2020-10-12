import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      {data.allWpPost.nodes.map((node) => (
        <Link to={node.uri} key={node.uri}>
          <p>{node.title}</p>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </Link>
      ))}
    </Layout>
  )
}

//highlight-start
export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        uri
        title
        excerpt
        status
      }
    }
  }
`
//highlight-end

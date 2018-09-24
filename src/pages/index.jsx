import React from 'react'
import styled from 'styled-components'
import { graphql } from "gatsby";

class Index extends React.Component {
  render() {
    const posts = this.props.data.allWordpressPost.edges
    return (
      <HomeContainer>
        <MainContentContainer>
          <h1>CV Blog </h1>
          <Divider />
        </MainContentContainer>
      </HomeContainer>
    )
  }
}

export default Index

const HomeContainer = styled.div``

const Divider = styled.div`
  margin: 50px 0;
  border-bottom: 1px solid darkgray;
`

const MainContentContainer = styled.main`
  width: 600px;
  margin: 50px auto;

  h1 {
    text-align: center;
    font-weight: 700;
    margin-bottom: 25px;
  }

  p {
    font-size: 16px;
    margin-bottom: 25px;
  }

  pre {
    background-color: grey;
  }
`
export const pageQuery = graphql`
  query IndexQuery {
    allWordpressPost(limit:5, filter: {categories: { name : {eq : "Essay Breakdown"}}}) {
      edges {
        node {
          featured_media {
            source_url
          }
          author {
            name
          }
          date
          slug
          title
          modified
          excerpt
          id
          categories {
            name
          }
          tags {
            name
          }
          content
        }
      }
    }    
  }
`

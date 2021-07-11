import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GithubCards, GithubCard, GithubBoxWrap, Languages } from './styles'

const GithubBox = () => {
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(first: 8, isFork: false) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  languages(first: 3) {
                    nodes {
                      id
                      name
                      color
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <GithubBoxWrap>
      <h3>My GitHub Projects</h3>
      <p>
        See some projects that I've done. I know that it's not much, but you
        have to start somewhere, right?
        <span role="img" aria-label="right?">
          🤷‍♂️
        </span>
        <br />
        That's not everything, that I've done. Check out{' '}
        <Link to="/webpages">webpages</Link> to see my other
        projects.
      </p>
      <GithubCards>
        {edges.map(({ node }) => (
          <GithubCard key={node.id}>
            <h4>
              <a href={node.url}>{node.name}</a>
            </h4>
            <div>{node.description}</div>
            <Languages>
              {node.languages.nodes.map(({ id, name, color }) => (
                <span className={`badge me-1 ${name === "JavaScript" && "text-dark"}`} key={id} style={{backgroundColor: color}}>
                  {name}
                </span>
              ))}
            </Languages>
          </GithubCard>
        ))}
      </GithubCards>
    </GithubBoxWrap>
  )
}

export default GithubBox

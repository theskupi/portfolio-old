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
                  name
                  url
                  description
                  languages(first: 3) {
                    nodes {
                      id
                      name
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
        That's not everything, that I've done. Check out <Link to="../../pages/webpages/index">webpages</Link> to see my other
        projects.
      </p>
      <GithubCards>
        {edges.map(({ node }) => (
          <GithubCard>
            <h4>
              <a href={node.url}>{node.name}</a>
            </h4>
            <p>{node.description}</p>
            <Languages>
              {node.languages.nodes.map(({ id, name }) => (
                <span className="badge bg-light text-dark me-1" key={id}>
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

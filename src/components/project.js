import "../scss/projects.scss"

import React from "react"
import Card from "react-bulma-components/lib/components/card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { faBook } from "@fortawesome/free-solid-svg-icons/faBook"

class Project extends React.Component {
  render() {
    const { data } = this.props
    return (
      <Card>
        {data.banner && <Card.Image src={data.banner} alt={data.title}/>}
        {!data.banner && (
          <Card.Header>
            <Card.Header.Title>{data.title}</Card.Header.Title>
          </Card.Header>
        )}
        <Card.Content>{data.description}</Card.Content>
        <Card.Footer>
          {data.github && (
            <Card.Footer.Item renderAs="a" href={data.github}>
              <FontAwesomeIcon icon={faGithub} size="lg"/>
            </Card.Footer.Item>
          )}
          {data.docs && (
            <Card.Footer.Item renderAs="a" href={data.docs}>
              <FontAwesomeIcon icon={faBook} size="lg"/>
            </Card.Footer.Item>
          )}
        </Card.Footer>
      </Card>
    )
  }
}

export default Project

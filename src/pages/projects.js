import React from "react"
import Layout from "../components/layout"
import Project from "../components/project"
import Section from "react-bulma-components/lib/components/section"
import Container from "react-bulma-components/lib/components/container"
import Content from "react-bulma-components/lib/components/content"
import Heading from "react-bulma-components/lib/components/heading"

const projects = require("../../db/projects")

export default () => (
  <Layout>
    <Section>
      <Container>
        <Heading>Projects</Heading>
        <Content>
          {projects && projects.map(project => <Project data={project}/>)}
        </Content>
      </Container>
    </Section>
  </Layout>
)

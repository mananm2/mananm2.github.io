import React from "react"
import Layout from "../components/layout"
import Publications from "../components/publication"
import Presentations from "../components/presentation"
import Section from "react-bulma-components/lib/components/section"
import Container from "react-bulma-components/lib/components/container"
import Content from "react-bulma-components/lib/components/content"
import Heading from "react-bulma-components/lib/components/heading"

export default () => (
  <Layout>
    <Section>
      <Container>
        <Heading>Research Interests</Heading>
        <Heading subtitle>
          I am interested in convex optimization and machine learning techniques
          for large-scale stochastic systems. My research to-date has focused on
          applying the conditional-value-at-risk (CVaR) risk measure to model
          uncertainty in convex optimization, as well as efficient and
          data-driven algorithms to solve these problems.
        </Heading>
      </Container>
    </Section>
    <Section>
      <Container>
        <Heading>Publications</Heading>
        <Content>
          <Publications/>
        </Content>
      </Container>
    </Section>
    <Section>
      <Container>
        <Heading>Presentations</Heading>
        <Content>
          <Presentations/>
        </Content>
      </Container>
    </Section>
  </Layout>
)

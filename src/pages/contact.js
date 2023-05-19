import "../scss/contact.scss"

import React from "react"
import Layout from "../components/layout"
import MainPanel from "../components/panel"
import Container from "react-bulma-components/lib/components/container"
import Columns from "react-bulma-components/lib/components/columns"
import Heading from "react-bulma-components/lib/components/heading"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope"
import { faAddressCard } from "@fortawesome/free-solid-svg-icons/faAddressCard"

export default () => (
  <Layout>
    <MainPanel>
      <Container>
        <Columns id="contact-info" centered>
          <Columns.Column textAlignment="centered" size="one-third">
            <FontAwesomeIcon icon={faEnvelope}/>
            <Heading renderAs="p" heading>
              Email
            </Heading>
            <p>madavan2@illiois.edu</p>
          </Columns.Column>
          <Columns.Column textAlignment="centered" size="one-third">
            <FontAwesomeIcon icon={faAddressCard}/>
            <Heading renderAs="p" heading>
              Address
            </Heading>
            <p>4068 ECE Building</p>
            <p>306 North Wright Street</p>
            <p>Urbana Illinois 61801</p>
          </Columns.Column>
        </Columns>
      </Container>
    </MainPanel>
  </Layout>
)

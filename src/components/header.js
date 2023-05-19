import React, { Component } from "react"
import Navbar from "react-bulma-components/lib/components/navbar"

class Header extends Component {
  state = { active: false }

  handleClick = () => {
    const { active } = this.state
    this.setState({ active: !active })
  }

  render() {
    return (
      <Navbar active={this.state.active}>
        <Navbar.Brand>
          <Navbar.Burger
            active={this.state.active}
            onClick={this.handleClick}
          />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container position="end">
            <Navbar.Item href="/">Home</Navbar.Item>
            <Navbar.Item href="/research">Research</Navbar.Item>
            <Navbar.Item href="/projects">Projects</Navbar.Item>
            <Navbar.Item href="/resume">Resume</Navbar.Item>
            <Navbar.Item href="/contact">Contact</Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    )
  }
}

export default Header

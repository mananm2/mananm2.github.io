import React from "react"

const publications = require("../../db/publications.json")

let Cite = require("citation-js")

class Publication extends React.Component {
  render() {
    // let raw_data = this.props.data
    let data = new Cite(this.props.data)
    let citation = data.format("bibliography", {
      format: "html",
      template: "harvard1",
      lang: "en-US",
    })
    return <li dangerouslySetInnerHTML={{ __html: citation }}/>
  }
}

export default () => (
  <ul>
    {publications.map(pub => (
      <Publication key={pub.id} data={pub}/>
    ))}
  </ul>
)

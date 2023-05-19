import React from "react"

const presentations = require("../../db/presentations")

class Presentation extends React.Component {
  render() {
    const { data } = this.props
    return (
      <li>
        {data.title && <span>{data.title}. </span>}
        {data.presented_at && (
          <span>
            Presented at: <i>{data.presented_at}</i>{" "}
          </span>
        )}
        {data.url && (
          <span>
            [<a href={data.url}>file</a>]
          </span>
        )}
      </li>
    )
  }
}

export default () => (
  <ul>
    {presentations.map(pres => (
      <Presentation data={pres}/>
    ))}
  </ul>
)

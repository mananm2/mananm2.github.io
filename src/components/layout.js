import "../scss/_app.scss"

import React from "react"
import Header from "./header.js"

export default ({ children }) => (
  <div>
    <Header/>
    {children}
  </div>
)

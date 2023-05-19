import "../scss/panel.scss"

import React from "react"
import Level from "react-bulma-components/lib/components/level"

export default ({ children }) => (
  <Level className="main-panel">
    <Level.Item>{children}</Level.Item>
  </Level>
)

// Global styles

import React from "react"

const globalStyles: Partial<
  Record<keyof JSX.IntrinsicElements, React.CSSProperties>
> = {
  body: {
    margin: 0,
    padding: 0,
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
}

export default globalStyles

import React from "react"

import { title } from "./style"

const Title = ({ children, ...props }) => (
  <p css={title} {...props}>
    {children}
  </p>
)

// const Title = ({ children, special, bold, fontSize }) => (
//   <>
//     <p css={theme => title(theme, special, bold, fontSize)}>
//       {children}
//     </p>
//   </>
// )

export default Title

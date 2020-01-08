import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import Img from "gatsby-image"

import {
  container,
  title as titleStyle,
  image as imageStyle,
  imageContainer,
  andMore,
  inlineContainer,
} from "./style"

const Category = ({ title, images, columnCount, ...props }) => {
  const components = images.map((image, index) => (
    <Img css={imageStyle} key={index} fluid={image} />
  ))
  components.push(
    <p key={images.length} css={andMore}>
      <FormattedMessage id="andMore" defaultMessage="and more..." />
    </p>
  )

  return (
    <div css={container} {...props}>
      <p css={titleStyle}>{title}</p>
      <div css={imageContainer}>
        {[...Array(columnCount)].map((_, colIndex) => (
          <div key={`col-${colIndex}`} css={inlineContainer}>
            {components
              .filter((_, index) => index % columnCount === colIndex)
              .map(component => component)}
          </div>
        ))}
      </div>
    </div>
  )
}

Category.defaultProps = {
  columnCount: 1,
}

export default Category

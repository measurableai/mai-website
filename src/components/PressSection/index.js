import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import {
  title,
  content1,
  content2,
  contentFontStyle,
  emailMargin,
  emailStyle,
  button,
} from "./style"

const PressSection = props => (
  <div {...props}>
    <h1 css={title}>
      <FormattedMessage
        id="shoutOutToJournalists"
        defaultMessage="Shout out to Journalists"
      />
    </h1>
    <p css={theme => [contentFontStyle(theme), content1]}>
      <FormattedMessage
        id="maiProvidesJournalists"
        defaultMessage="Measurable AI provides journalists with an exclusive database of source for consumer insights and the business world. You can either track consumer trends through our data dashboard, or we can email the data you might need."
      />
    </p>
    <p css={theme => [contentFontStyle(theme), content2]}>
      <FormattedMessage
        id="letUsknowYourPublication"
        defaultMessage="Let us know your publication, story and companies you are looking at, and we'll help !"
      />
    </p>
    <p css={theme => [contentFontStyle(theme), emailMargin]}>
      <FormattedMessage
        id="emailToPress"
        defaultMessage="Please contact <span>press@measurable.ai</span>"
        values={{
          span: str => (
            <span css={emailStyle}>
              <br />
              {str}
            </span>
          ),
        }}
      />
    </p>
    <a
      href="https://mai-marektingsite.s3-us-west-2.amazonaws.com/MAI+Press+Kit.zip"
      download
    >
      <button css={button}>
        <FormattedMessage
          id="downloadPressKit"
          defaultMessage="Download Press Kit"
        />
      </button>
    </a>
  </div>
)

export default PressSection

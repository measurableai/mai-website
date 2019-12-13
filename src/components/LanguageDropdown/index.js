import React, { useState, useMemo, useCallback } from "react"
import Select, { components } from "react-select"
import { useTheme } from "emotion-theming"

import { singleValue, optionIcon, arrowDown } from "./style"
import LanguageIconWhite from "../../assets/language-icon-white.svg"
import LanguageEngIcon from "../../assets/language-eng.svg"
import LanguageTCIcon from "../../assets/language-tc.svg"
import LanguageSCIcon from "../../assets/language-sc.svg"

const options = [
  { value: "chocolate", label: "ENG", Icon: LanguageEngIcon },
  { value: "strawberry", label: "繁體", Icon: LanguageTCIcon },
  { value: "vanilla", label: "简体", Icon: LanguageSCIcon },
]

const SingleValue = ({ children, ...props }) => (
  <div css={singleValue}>
    <LanguageIconWhite fill="currentColor" />
    <components.SingleValue {...props}>{children}</components.SingleValue>
  </div>
)

const Option = ({ children, ...props }) => (
  <components.Option {...props}>
    <props.data.Icon
      fill="currentColor"
      width={20}
      height={20}
      css={optionIcon}
    />
    {children}
  </components.Option>
)

const DropdownIndicator = props => (
  <components.DropdownIndicator {...props}>
    <div css={arrowDown} />
  </components.DropdownIndicator>
)

const LanguageDropdown = props => {
  const [selectedOption, setSelectedOption] = useState(options[0])
  const theme = useTheme()

  const styles = useMemo(
    () => ({
      container: provided => ({
        ...provided,
        display: "inline-block",
        width: "102px",
      }),
      control: provided => ({
        ...provided,
        minHeight: "24px",
        backgroundColor: "transparent",
        border: "none",
        padding: "0.8rem 1rem",
        color: "white",
        ":hover": {
          color: theme.colors.greens.light,
        },
        cursor: "pointer",
      }),
      valueContainer: provided => ({
        ...provided,
        padding: 0,
        color: "inherit",
      }),
      input: provided => ({
        ...provided,
        padding: 0,
        margin: 0,
      }),
      singleValue: () => ({
        marginLeft: "4px",
        color: "inherit",
        overflow: "hidden",
        textOverflow: "ellipsis",
        fontSize: "1.4rem",
      }),
      indicatorSeparator: () => ({}),
      dropdownIndicator: () => ({}),
      indicatorsContainer: provided => ({
        ...provided,
        marginRight: "4px",
        color: "inherit",
      }),
      menu: provided => ({
        ...provided,
        backgroundColor: theme.colors.purples.normal,
      }),
      option: (provided, state) => ({
        ...provided,
        ":active": null,
        backgroundColor: "transparent",
        color: state.isSelected ? theme.colors.greens.light : "white",
        fontSize: "1.3rem",
        paddingTop: "6px",
        paddingBottom: "6px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
      }),
    }),
    [theme.colors.greens.light, theme.colors.purples.normal]
  )

  const handleChange = useCallback(selectedOption => {
    setSelectedOption(selectedOption)
  }, [])

  return (
    <Select
      styles={styles}
      components={{ SingleValue, Option, DropdownIndicator }}
      value={selectedOption}
      onChange={handleChange}
      options={options}
      {...props}
    />
  )
}

export default LanguageDropdown

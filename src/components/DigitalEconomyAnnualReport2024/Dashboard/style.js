import { css } from "@emotion/core"

export const DashboardWrapper = theme => css`
  width: 80%;
  margin: 80px auto;
  position: relative;
  z-index: 2;
`

export const Dashboard = theme => css`
  border: 2px solid #0a0a80;
  border-radius: 16px;
  transition: all 200ms ease;

  :hover {
    border-radius: 8px;
  }
`

export const UnlockBtn = theme => css`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.6rem;
  text-decoration: none;

  span {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 2.4rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #0a0a80;
    margin-left: 1.6rem;
    transition: all 100ms ease;
  }

  :hover span {
    color: #00d2c8;
  }
`

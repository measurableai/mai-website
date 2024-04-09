import { css } from "@emotion/core"
import { mq } from "@/theme"

export const DashboardWrapper = theme => css`
  width: 100%;
  margin: 120px auto;
  position: relative;
  z-index: 2;

  ${mq.tablet} {
    width: 90%;
  }
`

export const Dashboard = theme => css`
  border: 2px solid #0a0a80;
  border-radius: 16px;
  transition: all 200ms ease;
  height: 40vw;
  transform: scale(0.95);

  :hover {
    border-radius: 8px;
    transform: scale(1);
  }

  ${mq.tablet} {
    transform: scale(1);
    border-radius: 8px;
    transition: none;
    height: 80vh;
  }
`

export const UnlockBtn = theme => css`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.6rem;
  text-decoration: none;

  img {
    width: 4.8rem;
    height: 4.8rem;
  }

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

  ${mq.tablet} {
    img {
      width: 3.2rem;
      height: 3.2rem;
    }
    span {
      font-size: 1.8rem;
    }
  }
`

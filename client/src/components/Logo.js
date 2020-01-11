import React from 'react';
import styled, {keyframes} from 'styled-components'

function Logo(props) {
  return (
    <Logo_>
      <Strong>{props.children[0]}</Strong>{props.children.split(props.children[0])}
    </Logo_>
  )
}

function pulse(n) {
  return keyframes`
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(${n})
    }
  `
}

const Logo_ = styled.span`
  font-weight: bold;
  color: #263238;
  font-size: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 360px) {
    font-size: 50px;
  }
`

const Strong = styled.strong`
  display: block;
  width: 1.7em;
  height: 1.7em;
  line-height: 1.7em;
  font-size: 96px;
  text-align: center;
  background-color: #263238;
  color: #4dd0e1;
  border-radius: 2em;
  animation: ${pulse(0.9)} 1.2s infinite;
  animation-timing-function: ease-in-out;
  @media (max-width: 350px) {
    font-size: 65px;
  }
`

export default Logo

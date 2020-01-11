import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons'


function GithubButton() {
  return (
    <Container>
      <InnerContainer>
        <Triangle>
        </Triangle>
        <Icon onClick={redirect} icon={faGithub} />
      </InnerContainer>
    </Container>
  )
}

function redirect() {
  window.open('https://github.com/OhFloree')
}

function calcLength(a) {
  return Math.sqrt(2 * (a*a))
}

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: ${calcLength(150)}px;
  height: ${calcLength(150)}px;
`

const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  `

const Triangle = styled.div`
  position: absolute;
  top: ${calcLength(150) - 150}px;
  height: 0;
  width: 0;
  border: none;
  background-color: transparent;
  border-top: 150px solid transparent;
  border-bottom: 150px solid transparent;
  border-right:150px solid #263238;
  transform: rotateZ(-45deg);
  transform-origin: center left;
`

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  bottom: 15%;
  left: 15%;
  font-size: 64px;
  & > path {
    color: #eeeeee;
    transition: 200ms;
  }
  &&:hover > path {
    color: #1e88e5;
  }
`

export default GithubButton

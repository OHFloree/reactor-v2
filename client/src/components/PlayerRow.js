import React from 'react';
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons'

function PlayerRow({name,ready}) {
  return (
    <Row>
      <Name>{name}</Name>
      <Name>{ready ? <Icon icon={faCheck}/> : null}</Name>
    </Row>
  )
}

export default PlayerRow

const Row = styled.div`
  width: 100%;
  height: 3em;
  margin-bottom: 4em;
  border: 5px solid #eeeeee;
  border-radius: 2em;
  background-color: #263238;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Name= styled.p`
  padding: 1em;
  font-size: 18px;
  color: #eeeeee;
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 24px;
  & > path {
    color: #43a047;
    transition: 200ms;
  }
`

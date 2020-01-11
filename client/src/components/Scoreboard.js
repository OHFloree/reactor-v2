import React from 'react';
import styled from 'styled-components'

function Scoreboard(props) {
  return (
    <ScoreboardContainer>
      <Score>{props.score[0]}</Score>
      <Score>:</Score>
      <Score>{props.score[1]}</Score>
    </ScoreboardContainer>
  )
}

export default Scoreboard

const ScoreboardContainer = styled.div`
  width: 20em;
  height: 6em;
  position: absolute;
  top: 0;
  left: calc(50% - 10em);
  border-radius: 0 0 2em 2em;
  background-color: #263238;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
const Score = styled.span`
  color: white;
  font-size: 32px;
`

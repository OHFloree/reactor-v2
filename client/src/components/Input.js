import React from 'react';
import styled from 'styled-components'

const Input = styled.input`
  width: 100%;
  min-width: 200px;
  padding: 1em;
  border: 5px solid #eeeeee;
  border-radius: 2em;
  background-color: #263238;
  letter-spacing: 2px;
  color: #eeeeee;
  transition: 150ms all ease-in-out;
  &&:hover {
    color: #1e88e5;
    border-color: #1e88e5;
  }
`

export default Input

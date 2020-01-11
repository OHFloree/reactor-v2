import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const A = styled(Link)`
  width: 100%;
  display: block;
  padding: 1em;
  border: 5px solid #eeeeee;
  border-radius: 2em;
  background-color: #263238;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  color: #eeeeee;
  transition: 150ms all ease-in-out;
  &&:hover {
    color: #1e88e5;
    border-color: #1e88e5;
  }
`

export default A

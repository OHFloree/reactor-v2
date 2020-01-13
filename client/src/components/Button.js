import React from 'react';
import styled from 'styled-components'

function Button(props) {
  let {icon,children, onClick, justify} = props
  if(icon) {
    return <Button_ justify={justify} onClick={onClick}>{children}</Button_>
  }
  else {
    return(
      <Button_ justify={justify} onClick={onClick}>{children}</Button_>
    )
  }
}

const Button_ = styled.button`
  display: flex;
  justify-content: ${props => props.justify || 'center'};
  width: 100%;
  padding: 1em;
  border: 5px solid #eeeeee;
  border-radius: 2em;
  background-color: #263238;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #eeeeee;
  transition: 150ms all ease-in-out;
  cursor: pointer;
  &&:hover {
    color: #1e88e5;
    border-color: #1e88e5;
  }
`

export default Button

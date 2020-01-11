import React, { Component, Fragment } from 'react';
import styled from 'styled-components'

class InputNumber extends Component{
  constructor() {
    super();
    this.state = {
      value: 3
    }
  }

  increment = (e) => {
    let value = this.props.value
    value ++
    if(value <= 10) {
      this.props.onChangeHandler(value)
    }
  }

  decrement = () => {
    let value = this.props.value
    value --
    if(value > 0) {
      this.props.onChangeHandler(value)
    }
  }

  handleChange = (e) => {
    let value = e.target.value
      this.props.onChangeHandler(value)
  }

  render() {
    return (
      <InputWrapper>
        <InputContainer>
          <Button onClick={this.decrement}>-</Button>
          <Input type="number" value={this.props.value} onChange={this.handleChange} />
          <Button onClick={this.increment}>+</Button>
        </InputContainer>
      </InputWrapper>
    )
  }
}

export default InputNumber

const InputWrapper = styled.div`
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;
`

const Button = styled.button`
  padding: 1em;
  border: 5px solid #eeeeee;
  background-color: #263238;
  color: #eeeeee;
  transition: 150ms all ease-in-out;
  cursor: pointer;
  &&:nth-child(1) {
    border-radius: 2em 0 0 2em;
    border-width: 5px 0px 5px 5px;
  }
  &&:nth-child(3) {
    border-radius: 0 2em 2em 0;
    border-width: 5px 5px 5px 0px;
  }
  &&:hover {
    border-color: #1e88e5;
    color: #1e88e5;
  }
`

const Input = styled.input`
  width: 100%;
  text-align: center;
  border: none;
  border-top: 5px solid #eeeeee;
  border-bottom: 5px solid #eeeeee;
  background-color: #263238;
  color: #eeeeee;
  transition: 150ms all ease-in-out;
  &&:focus {
    color: #1e88e5;
  }
`

import React, {Component,Fragment} from 'react';
import styled from 'styled-components'

const Page = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: ${props => props.align};
`

const Container = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
`

const Row = styled.div`
  width: ${props => props.width};
  min-width: 300px;
  max-width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
`

export {Page, Container, Row}

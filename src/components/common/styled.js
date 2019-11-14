import React from 'react'
import styled from 'styled-components'

export const InputNumber = styled.input`
  background: transparent;
  color: #ccc;
  border: none;
  outline: none;
  
  flex: 1 1 auto;

  font-size: 16px;
  letter-spacing: 1px;

  -moz-appearance:textfield;
  
  &::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none; 
    margin: 0;
  }
  &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: grey;
    font-size: 12px;
  }
  &::-moz-placeholder { /* Chrome/Opera/Safari */
    color: grey;
    font-size: 12px;
  }
`

export const InputRadio = styled.input`
  margin-left: 25px;
  margin-right: 5px;
`

export const Textarea = styled.textarea`
  background: transparent;
  color: #ccc;
  border: none;
  outline: none;
  font-size: 16px;
  letter-spacing: 1px;
  flex: 1 1 auto;
  &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: grey;
    font-size: 12px;
  }
  &::-moz-placeholder { /* Chrome/Opera/Safari */
    color: grey;
    font-size: 12px;
  }
`

export const Label = styled.label`
  color: #ccc;
  font-size: 14px;
  margin: 0;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  
`

export const InputBottom = styled.p`
  color: white;
  letter-spacing: 0.3px;
  font-size: 12px;
  margin: 0;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(100, 100, 100, 0.5);
  padding: 6px;
  margin: 8px 0;
  border-radius: 5px;
  height: calc(100% - 20px);
  transition: all 0.3s;
  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
  &:hover input {
    color: white;
  }
`
export const InputButton = styled.button`
  border: 1px solid transparent;
  border-radius: 8px;
  outline: none!important;
  color: #222;
  background: #ccc;
  text-align: center;
  height: 50px;
  transition: all 0.3s;
  &:hover{
    background: black;
    color: #ccc;
    border: #ccc 1px solid;
  }
`
export const BigText = styled.div`
  color: #ccc;
  letter-spacing: 0.8px;
  font-size: 20px;
  text-align: center;
`

// h1-h6
export const H1White = styled.h1`
  color: #ccc;
  letter-spacing: 1px;
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
  margin-top: 10vh;
  text-align: center;
`
export const H2White = styled.h2`
  color: #ccc;
  letter-spacing: .7px;
  font-size: 20px;
  text-align: center;
`
export const H3White = styled.h3`
  color: #ccc;
  letter-spacing: .5px;
  font-size: 14px;
  text-align: ${props => props.align || "center"};;
`

// span
export const GapSpan = styled.span`
  padding: 0 8px;
`

// semantick
export const Sectiion = styled.section`
  margin: 10vh 0;
`
export const FooterWrap = styled.section`
  margin: 10vh 0 0 0;
  padding: 30px 10px;
  ;
`

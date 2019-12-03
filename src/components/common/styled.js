
import styled from 'styled-components'

export const InputNumber = styled.input`
  background: transparent;
  color: var(--light);
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
  color: var(--light);
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
  color: var(--light);
  font-size: 14px;
  margin: 0;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  
`

export const InputBottom = styled.p`
  color: var(--light);
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
    color: var(--light);
  }
`
export const InputButton = styled.button`
  border: 1px solid transparent;
  border-radius: 8px;
  outline: none!important;
  color: #222;
  background: var(--light);
  text-align: center;
  height: 40px;
  transition: all 0.3s;
  padding: 0 20px;
  &:hover{
    background: #181819;
    color: var(--light);
    border: var(--light) 1px solid;
  }
`
export const BigText = styled.div`
  color: var(--light);
  letter-spacing: 0.8px;
  font-size: 20px;
  text-align: center;
`

// h1-h6
export const H1White = styled.h1`
  color: var(--light);
  letter-spacing: 1px;
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
  text-align: center;
`
export const H2White = styled.h2`
  color: var(--light);
  letter-spacing: .7px;
  font-size: 20px;
  text-align: center;
`
export const H3White = styled.h3`
  color: var(--light);
  letter-spacing: .5px;
  font-size: ${props => props.size || '14px' };
  text-align: ${props => props.align || "center"};
`
export const H4White = styled.h4`
  color: var(--light);
  letter-spacing: .5px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  text-align: ${props => props.align || "start"};
`
export const P = styled.p`
  color: var(--light);
  font-size: ${props => props.size || '13px'};
  line-height: 24px;
  text-align: ${props => props.align || "start"};
  letter-spacing: 1px;
`
export const A = styled.a`
  color: var(--light);
  font-size: ${props => props.size || '17px'};
  text-align: ${props => props.align || "start"};
  display: block;
  padding: 5px 0;
  transition: all .3s;
`
export const Mark = styled.mark`
  color: var(--light);
  background: #212529;
`

// span
export const GapSpan = styled.span`
  padding: 0 8px;
`

// semantick
export const Section = styled.section`
  margin: ${props => props.margin || '10vh 0 0 0' };
  padding: ${props => props.padding || '30px 0' };
`
export const ArticleCard = styled.article`
  margin: ${props => props.margin || '10vh 0 0 0' };
  border: 1px solid #333;
  height: calc(100% - 30px);
`
export const ArticleCartext = styled.div`
  padding: 6vh 2vw 0;
`
export const FooterWrap = styled.section`
  margin: 10vh 0 0 0;
  padding: 30px 10px;
  ;
`
export const Article = styled.article`
  padding: 15px 0;
`
// img
export const IMG = styled.img`
display: block;
  max-width: 100%;
  height: auto;
  margin: ${props => props.margin || '0 auto' };
`

export const Overlay = styled.div`
  position: fixed;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background: #181819;
  color: var(--light);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

`


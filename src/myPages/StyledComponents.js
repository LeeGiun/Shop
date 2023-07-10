import React from 'react'
import styled, { keyframes } from 'styled-components'
const Wrap = styled.div`
  background-color: #ccc;
  height: 200px;
`

const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  line-height: 200px;
  color: blue;
`

const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color:${(props) => (props.enter ? 'yellow' : '#ccc')};
  border-color: ${(props) => (props.enter ? 'blue' : 'black')};
  color: blue;
  margin: 5px;
  border-radius: 5px;

  &:hover {
    font-size: 20px;
    font-weight: bold;
  }
`


//  styled(Button) 속성을 상속받는방법
const FirstButton = styled(Button)`
  width: 150px;
  background-color: black;
  color: white;
`


const LinkButton = styled(FirstButton)`
  display: block;
  text-decoration: none;
`

const input = styled.input`
  padding: 8px;
  margin: 10px;
  background-color: yellow;
  border-radius: 5px;
  /* color: ${(props) => props.inputColor? props.inputColor : 'blue'} */
  color : ${(props) => props.inputColor || 'blue'}
`
// attr = arttribute
const FirstInput = styled.input.attrs((props) => ({
  type: 'text',
  size: 'props.size'|| '16px'
}))`
  color: blue;
  font-size: ${(props) => props.size}
`
// styled.input.attrs((props) => ({ 속성까지 지정하겠다는 의미 
// 기본적인 사이즈를 줄 수 있고 바뀌는 사이즈를 설정할 수 있음
//'props.size'|| '16px'   props.size 가 존재하지않는다면 16px


// 애니메이션
const rotate = keyframes`
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
`


// styled Component
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 10s infinite linear;
  padding: 30px;
  font-size: 50px;
`

export default function StyledComponents() {
  return (
    <>
      <Wrap>
        <Title>Hello, React~</Title>
      </Wrap>
      <Button>Button</Button>
      <Button enter>들어가기</Button>
      <FirstButton>Button</FirstButton>
      <LinkButton as='a' href='http://www.naver.com'>link_button</LinkButton>
      <br/>
      <input type='text' defaultValue='input_text' />
      <input type='text' defaultValue='input_text' inputColor='red'/>
      <FirstInput placeholder = 'font-size' size='24px' />
      <FirstInput placeholder = 'font-size' />
      <Rotate>돌아간다★ㅡㅡㅡ</Rotate>
    </>
  )
}

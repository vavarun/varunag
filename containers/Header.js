import styled from 'styled-components'

import RevealingText from '../components/RevealingText/index'

const Header = styled.header`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 500px;
  padding: 0px 120px;
`
const Title = styled.h1`
  font-family: Playfair Display;
  margin: 0px;
  letter-spacing: 10px;
  font-size: 100px;
`

const Caption = styled.h2`
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  font-size: 16px;
  text-transform: uppercase;
  color: #a3a3a3;
`

const Button = styled.button`
  background: #92ddc8;
  border-radius: 4px;
  color: #000;
  text-transform: uppercase;

  border-style: none;
  letter-spacing: 2px;
  font-weight: 900;
  padding: 20px 25px;
  line-height: 0.75em;
`

function HeaderComponent() {
  return (
    <Header>
      <RevealingText color={'#fff'}>
        <Title>Varun</Title>
      </RevealingText>
      <RevealingText color={'#fff'}>
        <Title>Agarwal</Title>
      </RevealingText>
      <Caption>
        Software developer + Entrepreneur with a passion for creating
        multi-disciplinary engineering background.
      </Caption>
      <Button>Contact Me</Button>
    </Header>
  )
}

export default HeaderComponent

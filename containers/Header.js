import PropTypes from 'prop-types'
import styled from 'styled-components'

import RevealingText from '../components/RevealingText/index'
import { ThemeContext } from '../pages/_app'
import media from '../utils/media'

const Section = styled.header`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  ${media.medium`width: 500px;`}
  ${media.large`width: 500px;`}
`
const Title = styled.h1`
  font-family: Playfair Display;
  margin: 0px;
  ${media.small`font-size: 60px;`}
  ${media.medium`font-size: 80px;`}
  ${media.large`font-size: 100px;`}
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
  letter-spacing: 1px;
  font-weight: 500;
  padding: 20px 25px;
  line-height: 0.75em;
  font-family: Roboto;
  font-size: 16px;
`

const Img = styled.img`
  object-fit: cover;
  height: 50px;
  position: absolute;
  bottom: 0;
  right: 50%;
  left: 50%;
  cursor: pointer;
`

function Header({ onScrollIntoView }) {
  return (
    <ThemeContext.Consumer>
      {({ value }) => {
        return (
          <Section>
            <RevealingText color={'#fff'}>
              <Title>Varun</Title>
            </RevealingText>
            <RevealingText color={'#fff'}>
              <Title>Agarwal</Title>
            </RevealingText>
            <Caption>
              Software developer + Entrepreneur with a passion for building
              things. Currently based in Barcelona
            </Caption>
            <Button onClick={() => onScrollIntoView('contact')}>
              Contact Me
            </Button>
            <Img
              onClick={() => onScrollIntoView('aboutme')}
              src={
                value
                  ? '/static/down-arrow-dark.svg'
                  : '/static/down-arrow-light.svg'
              }
            />
          </Section>
        )
      }}
    </ThemeContext.Consumer>
  )
}

Header.propTypes = {
  onScrollIntoView: PropTypes.func,
}

export default Header

import styled from 'styled-components'

import RevealingText from '../components/RevealingText/index'
import Section from '../components/Section'
import media from '../utils/media'

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 50px;
  height: 100vh;
  width: 100vh;
`
const Title = styled.h1`
  font-family: Playfair Display;
  margin: 0px;
  font-size: 36px;
  text-transform: uppercase;
`

const Details = styled.div`
  margin-top: 100px;
  display: flex;

  ${media.small`
    flex-direction: column-reverse;
    width: 100%;
    align-items: center;
  `}
  ${media.medium`
    flex-direction: column-reverse;
    align-items: end;
  `}
  ${media.large`
    flex-direction: column-reverse;
    align-items: end;
  `}

`

const Contacts = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 600px;
  flex-wrap: wrap;
  ${media.small`
    flex-direction: column;
  `}
  ${media.medium`
    flex-direction: row;
  `}
  ${media.large`
    flex-direction: row;

  `}
`

const ClickDiv = styled.a`
  color: #a3a3a3;
  text-decoration: none;
`
const ContactTile = styled.div`
  display: flex;
  ${media.small`
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 20px;
  `}
  ${media.medium`
    flex-direction: column;
    align-items: end;
    margin-right: 100px;
    margin-bottom: 50px;
  `}
  ${media.large`
    flex-direction: column;
    align-items: end;
    margin-right: 100px;
    margin-bottom: 50px;
  `}

`
const ContactImg = styled.img`
  height: 25px;
  ${media.small`
    margin-right: 20px;
  `}
`

const ContactDescription = styled.span`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 300;
  line-height: 23px;
  font-size: 16px;
  margin-top: 5px;
`

const ProfileImg = styled.img`
  height: 150px;
  width: 150px;
  margin-top: 10px;
  border-radius: 75px;
  ${media.small`
    margin-bottom: 40px;
  `}
  ${media.medium`
    margin-left: 100px;
    margin-bottom: 40px;
  `}
  ${media.large`
    margin-left: 100px;
    margin-bottom: 40px;
  `}
`

const Contact = React.forwardRef((props, ref) => (
  <Section ref={ref}>
    <Header>
      <RevealingText color={'#fff'}>
        <Title>Contact</Title>
      </RevealingText>
      <Details>
        <Contacts>
          <ClickDiv href="mailto:hello@varunag.com">
            <ContactTile>
              <ContactImg src="/static/email-icon.svg" />
              <ContactDescription>hello@varunag.com</ContactDescription>
            </ContactTile>
          </ClickDiv>
          <ClickDiv
            href="https://www.linkedin.com/in/varun-ag/"
            target="_blank"
          >
            <ContactTile>
              <ContactImg src="/static/linkedin-icon.svg" />
              <ContactDescription>linkedin.com/in/varun-ag/</ContactDescription>
            </ContactTile>
          </ClickDiv>
          <ClickDiv href="https://www.github.com/vavarun" target="_blank">
            <ContactTile>
              <ContactImg src="/static/github-icon.svg" />
              <ContactDescription>github.com/vavarun</ContactDescription>
            </ContactTile>
          </ClickDiv>
          <ClickDiv href="https://www.instagram.com/vavarun/" target="_blank">
            <ContactTile>
              <ContactImg src="/static/instagram-icon.svg" />
              <ContactDescription>instagram.com/vavarun</ContactDescription>
            </ContactTile>
          </ClickDiv>
        </Contacts>
        <ProfileImg src="/static/profile-image.jpg" />
      </Details>
    </Header>
  </Section>
))

export default Contact

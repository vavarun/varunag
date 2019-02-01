import styled from 'styled-components'

import RevealingText from '../components/RevealingText/index'

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 50px;
  height: 100vh;
`
const Title = styled.h1`
  font-family: Playfair Display;
  margin: 0px;
  font-size: 36px;
  text-transform: uppercase;
`

const Contacts = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 600px;
  flex-wrap: wrap;
`

const ClickDiv = styled.a`
  color: #a3a3a3;
  text-decoration: none;
`
const ContactTile = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 100px;
  margin-bottom: 50px;
  align-items: end;
`
const ContactImg = styled.img`
  height: 25px;
`

const ContactDescription = styled.a`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 300;
  line-height: 23px;
  font-size: 16px;
  margin-top: 5px;
`

const ProfileImg = styled.img`
  height: 150px;
`

function Contact() {
  return (
    <Header>
      <RevealingText color={'#fff'}>
        <Title>Contact</Title>
      </RevealingText>
      <div style={{ display: 'flex', flexDirection: 'row',   marginTop: '100px'}}>
        <Contacts>
          <ClickDiv href='mailto:hello@varunag.com'>
            <ContactTile>
              <ContactImg src="/static/email-icon.svg"/>
              <ContactDescription>
                hello@varunag.com
              </ContactDescription>
            </ContactTile>
          </ClickDiv>
          <ClickDiv href='https://www.linkedin.com/in/varun-ag/'>
            <ContactTile>
              <ContactImg src="/static/linkedin-icon.svg"/>
              <ContactDescription>
                linkedin.com/in/varun-ag/
              </ContactDescription>
            </ContactTile>
          </ClickDiv>
          <ClickDiv href='https://www.github.com/vavarun'>
            <ContactTile >
              <ContactImg src="/static/github-icon.svg"/>
              <ContactDescription>
                github.com/vavarun
              </ContactDescription>
            </ContactTile>
          </ClickDiv>
          <ClickDiv href='https://www.instagram.com/vavarun/'>
            <ContactTile>
              <ContactImg src="/static/instagram-icon.svg"/>
              <ContactDescription>
                instagram.com/vavarun
              </ContactDescription>
            </ContactTile>
          </ClickDiv>
        </Contacts>
        <ProfileImg src='/static/profile-image.jpg' />
      </div>
    </Header>
  )
}

export default Contact

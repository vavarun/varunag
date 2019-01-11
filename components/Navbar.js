import NextLink from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import media from '../utils/media'

const Header = styled.nav`
  display: flex;
  align-items: center;
  padding: 15px;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 70px;
  justify-content: center;
`

const Nav = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  justify-content: space-between;
  height: 70px;
  padding: 15px;
`
const H2 = styled.h2`
  font-weight: 400;
  margin: 0px;
  color: white;
  ${media.small`
    font-size: 20px;
    span {
      display: none;
    }
  `};
`
const LinkWrapper = styled.div`
  display: flex;
  :hover button {
    color: rgba(150, 150, 150, 0.6);
  }
  :hover button:hover {
    color: white;
  }
`
const Link = styled.button`
  text-align: left;
  margin-right: 50px;
  padding: 10px 50px 10px 0;
  border: none;
  border-bottom: 1px white solid;
  font-size: 13px;
  font-weight: 700;
  color: white;
  background-color: transparent;
  transition: color 0.3s;
  cursor: pointer;
`
const Img = styled.img`
  object-fit: cover;
  height: 70px;
  width: 70px;
`
const ImgDiv = styled.div`
  background: #fff;
  height: 70px;
  width: 70px;
  justify-content: center;
`
const Button = styled.button`
  background: #264fff;
  border-style: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 900;
  color: #fff;
  padding: 20px 25px;
  line-height: 0.75em;
`

function Navbar() {
  return (
    <Header>
      <ImgDiv>
        <Img
          src="/static/safari-pinned-tab.svg"
          alt="Varun Agarwal Developer"
        />
      </ImgDiv>
      <Nav>
        <LinkWrapper>
          <NextLink href="/">
            <Link>Home</Link>
          </NextLink>
          <NextLink href="/about-me">
            <Link>About Me</Link>
          </NextLink>
          <NextLink href="/blog">
            <Link>Blog</Link>
          </NextLink>
        </LinkWrapper>
        <Button>Contact Me</Button>
      </Nav>
    </Header>
  )
}

Navbar.propTypes = {
  onScrollIntoView: PropTypes.func,
}

export default Navbar

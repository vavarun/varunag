import NextLink from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import media from '../utils/media'
import Toggle from '../components/Toggle'

const ImgDiv = styled.div`
  width: 100%;
  position: absolute;
  align-items: center;
  justify-content: center;
`
const Img = styled.img`
  object-fit: cover;
  height: 60px;
  width: 60px;
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
  margin: 28px 120px 0px 120px;
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
    <>
      <ImgDiv>
        <Img
          src="/static/safari-pinned-tab.svg"
          alt="Varun Agarwal Developer"
        />
      </ImgDiv>
      {/* <Nav>
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
        <Toggle />
      </Nav> */}
    </>
  )
}

Navbar.propTypes = {
  onScrollIntoView: PropTypes.func,
}

export default Navbar

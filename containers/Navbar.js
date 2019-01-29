import NextLink from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Toggle from '../components/Toggle'

import media from '../utils/media'

const ImgDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  padding: 15px 120px 0px 120px;
`
const Img = styled.img`
  object-fit: cover;
  height: 60px;
  width: 60px;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 120px 0px 120px;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
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
  transition: color 0.3s;
  font-family: Roboto;
  cursor: pointer;
  font-size: 14px;
  color: white;
  font-weight: 500;
  border: none;
  :focus {
    outline: none;
  }
  background-color: transparent;
  margin-right: 115px;
`

function Navbar({ onScrollIntoView }) {
  return (
    <>
      <ImgDiv>
        <Img
          src="/static/safari-pinned-tab.svg"
          alt="Varun Agarwal Developer"
        />
      </ImgDiv>

      <Nav>
        <LinkWrapper>
          <Link onClick={() => onScrollIntoView('profile')}>Home</Link>
          <Link onClick={() => onScrollIntoView('resume')}>About Me</Link>
          <NextLink href="/blog">
            <Link>Blog</Link>
          </NextLink>
        </LinkWrapper>
        <Toggle />
      </Nav>
    </>
  )
}

Navbar.propTypes = {
  onScrollIntoView: PropTypes.func,
}

export default Navbar

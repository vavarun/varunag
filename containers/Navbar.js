import NextLink from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ThemeContext } from '../pages/_app'
import Toggle from '../components/Toggle'

const ImgDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  padding: 27px 120px 0px 120px;
`
const Img = styled.img`
  object-fit: cover;
  height: 40px;
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
    ${props => (props.toggle ? 'color: #111;' : 'color: #fff;')}
  }
`
const Link = styled.button`
  transition: color 0.3s;
  font-family: Roboto;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  border: none;
  :focus {
    outline: none;
  }
  background-color: transparent;
  margin-right: 115px;
  ${props => (props.toggle ? 'color: #111;' : 'color: #fff;')}
`

function Navbar({ onScrollIntoView }) {
  return (
    <ThemeContext.Consumer>
      {({ value }) => (
        <>
          <ImgDiv>
            <Img
              src={
                value
                  ? '/static/varun-icon-sun.svg'
                  : '/static/varun-icon-moon.svg'
              }
              alt="Varun Agarwal Developer"
            />
          </ImgDiv>

          <Nav>
            <LinkWrapper>
              <Link toggle={value} onClick={() => onScrollIntoView('profile')}>
                Home
              </Link>
              <Link toggle={value} onClick={() => onScrollIntoView('resume')}>
                About Me
              </Link>
              <NextLink href="/blog">
                <Link toggle={value}>Blog</Link>
              </NextLink>
            </LinkWrapper>
            <Toggle />
          </Nav>
        </>
      )}
    </ThemeContext.Consumer>
  )
}

Navbar.propTypes = {
  onScrollIntoView: PropTypes.func,
}

export default Navbar

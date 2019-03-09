import PropTypes from 'prop-types'
import styled from 'styled-components'

import Menu from '../components/Menu'
import Toggle from '../components/Toggle'
import { ThemeContext } from '../pages/_app'
import media from '../utils/media'

const ImgDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  ${media.small`
    padding: 27px 20px 0px 20px;
    `}
  ${media.medium`
    padding: 27px 50px 0px 50px;
  `}
  ${media.large`
    padding: 27px 120px 0px 120px;
  `}
`
const Img = styled.img`
  object-fit: cover;
  height: 40px;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  ${media.small`
    padding: 28px 5px 0px 20px;
    `}
  ${media.medium`
    padding: 28px 50px 0px 50px;
  `}
  ${media.large`
    padding: 28px 120px 0px 120px;
  `}
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
  margin-right: 50px;
  ${props => (props.toggle ? 'color: #111;' : 'color: #fff;')}
`

function Navbar({ onScrollIntoView }) {
  return (
    <ThemeContext.Consumer>
      {({ value, screen }) => (
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
            {screen !== 'large' ? (
              <Menu theme={value} onScrollIntoView={onScrollIntoView} />
            ) : (
              <LinkWrapper>
                <Link
                  toggle={value}
                  onClick={() => onScrollIntoView('aboutme')}
                >
                  About Me
                </Link>
                <Link
                  toggle={value}
                  onClick={() => onScrollIntoView('education')}
                >
                  Experience
                </Link>
                <Link
                  toggle={value}
                  onClick={() => onScrollIntoView('projects')}
                >
                  Projects
                </Link>
              </LinkWrapper>
            )}
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

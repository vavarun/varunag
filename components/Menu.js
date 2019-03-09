import PropTypes from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components'

const Bar1 = styled.div`
  width: 35px;
  height: 5px;
  background-color: #fff;
  margin: 6px 0;
  transition: 0.4s;
  background-color: ${({ menuTheme }) => (menuTheme ? '#111' : '#fff')};
  ${props => props.show && 'transform: rotate(-45deg) translate(-9px, 6px);'}
`

const Bar2 = styled.div`
  width: 35px;
  height: 5px;
  background-color: #fff;
  margin: 6px 0;
  transition: 0.4s;
  background-color: ${({ menuTheme }) => (menuTheme ? '#111' : '#fff')};
  ${props => props.show && 'opacity: 0;'}
`

const Bar3 = styled.div`
  width: 35px;
  height: 5px;
  margin: 6px 0;
  transition: 0.4s;
  background-color: ${({ menuTheme }) => (menuTheme ? '#111' : '#fff')};
  ${props => props.show && 'transform: rotate(45deg) translate(-8px, -8px);'};
`
const MobileMenu = styled.div`
  height: 100vh;
  width: 0;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  background-color: #333;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  ${props => props.show && 'width: 250px;'};
`

const Link = styled.button`
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  transition: 0.3s;
  display: block;
  font-family: Playfair Display;
  cursor: pointer;
  font-size: 24px;
  font-weight: 700;
  border: none;
  :focus {
    outline: none;
  }
  background-color: transparent;
  margin-right: 50px;
  color: ${({ menuTheme }) => (menuTheme ? '#fff' : '#111')};
  ${Link}:hover {
    color: ${({ menuTheme }) => (menuTheme ? '#111' : '#fff')};
  }
`

const MenuButton = styled.div`
  position: absolute;
  top: 28px;
  right: 0px;
  margin: 0px 30px 0px 0px;
`

const NavbarButton = styled.div`
  ${props => props.show && 'opacity: 0;'}
`

function Menu({ theme, onScrollIntoView }) {
  const [show, setShow] = useState(false)
  const handleSectionSelect = section => {
    onScrollIntoView(section)
    setShow(false)
  }

  return (
    <>
      <MobileMenu show={show} menuTheme={theme}>
        <MenuButton onClick={() => setShow(val => !val)}>
          <Bar1 show={show} menuTheme={theme} />
          <Bar2 show={show} menuTheme={theme} />
          <Bar3 show={show} menuTheme={theme} />
        </MenuButton>
        <Link onClick={() => handleSectionSelect('aboutme')}>About Me</Link>
        <Link onClick={() => handleSectionSelect('experience')}>
          Experience
        </Link>
        <Link onClick={() => handleSectionSelect('projects')}>Projects</Link>
        <Link onClick={() => handleSectionSelect('education')}>Education</Link>
        <Link onClick={() => handleSectionSelect('contact')}>Contact</Link>
      </MobileMenu>
      <NavbarButton show={show} onClick={() => setShow(val => !val)}>
        <Bar1 show={show} menuTheme={theme} />
        <Bar2 show={show} menuTheme={theme} />
        <Bar3 show={show} menuTheme={theme} />
      </NavbarButton>
    </>
  )
}

Menu.propTypes = {
  theme: PropTypes.bool,
  onScrollIntoView: PropTypes.func,
}

export default Menu

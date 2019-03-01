import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ThemeContext } from '../pages/_app'

const Bar1 = styled.div`
  width: 35px;
  height: 5px;
  background-color: #fff;
  margin: 6px 0;
  transition: 0.4s;
  background-color: ${({ menuTheme }) => (menuTheme ? '#111' : '#fff')};
  ${props => props.toggle && 'transform: rotate(-45deg) translate(-9px, 6px);'}
`

const Bar2 = styled.div`
  width: 35px;
  height: 5px;
  background-color: #fff;
  margin: 6px 0;
  transition: 0.4s;
  background-color: ${({ menuTheme }) => (menuTheme ? '#111' : '#fff')};
  ${props => props.toggle && 'opacity: 0;'}
`

const Bar3 = styled.div`
  width: 35px;
  height: 5px;
  margin: 6px 0;
  transition: 0.4s;
  background-color: ${({ menuTheme }) => (menuTheme ? '#111' : '#fff')};
  ${props => props.toggle && 'transform: rotate(45deg) translate(-8px, -8px);'};
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
  ${props => props.toggle && 'width: 250px;'};
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
  ${props => props.toggle && 'opacity: 0;'}
`

class Menu extends React.Component {
  state = {
    toggle: false,
  }

  render() {
    const { toggle } = this.state
    const { theme, onScrollIntoView } = this.props
    return (
      <>
        <MobileMenu toggle={toggle} menuTheme={theme}>
          <MenuButton
            toggle={toggle}
            onClick={() => this.setState({ toggle: !toggle })}
          >
            <Bar1 toggle={toggle} menuTheme={theme} />
            <Bar2 toggle={toggle} menuTheme={theme} />
            <Bar3 toggle={toggle} menuTheme={theme} />
          </MenuButton>
          <Link
            onClick={() => {
              onScrollIntoView('aboutme')
              this.setState({ toggle: false })
            }}
          >
            About Me
          </Link>
          <Link
            onClick={() => {
              onScrollIntoView('experience')
              this.setState({ toggle: false })
            }}
          >
            Experience
          </Link>
          <Link
            onClick={() => {
              onScrollIntoView('projects')
              this.setState({ toggle: false })
            }}
          >
            Projects
          </Link>
          <Link
            onClick={() => {
              onScrollIntoView('education')
              this.setState({ toggle: false })
            }}
          >
            Education
          </Link>
          <Link
            onClick={() => {
              onScrollIntoView('contact')
              this.setState({ toggle: false })
            }}
          >
            Contact
          </Link>
        </MobileMenu>
        <NavbarButton
          toggle={toggle}
          onClick={() => this.setState({ toggle: !toggle })}
        >
          <Bar1 toggle={toggle} menuTheme={theme} />
          <Bar2 toggle={toggle} menuTheme={theme} />
          <Bar3 toggle={toggle} menuTheme={theme} />
        </NavbarButton>
      </>
    )
  }
}

Menu.propTypes = {
  theme: PropTypes.bool,
}

export default Menu

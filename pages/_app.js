import App, { Container } from 'next/app'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

import media from '../utils/media'

export const ThemeContext = React.createContext({
  value: false,
  toggleTheme: () => {},
})

const sizes = {
  large: 1008,
  medium: 641,
  small: 0,
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    font-family: 'Roboto Condensed', Roboto, Playfair Display, sans-serif;
    width: 100vw;
    ${props =>
      props.toggle ? 'background-color: #fff;' : 'background-color: #111;'}
    ${props => (props.toggle ? 'color: #111;' : 'color: #fff;')}
  }
`

export default class MyApp extends App {
  constructor(props) {
    super(props)
    this.toggleTheme = () => {
      this.setState(state => ({
        value: !state.value,
      }))
    }
    this.state = {
      value: false,
      toggleTheme: this.toggleTheme,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.setDeviceWidth)
    this.setState({ screen: this.setDeviceWidth(window.innerWidth) })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.setDeviceWidth)
  }
  container = React.createRef()

  toggleTheme = () => {
    this.setState(state => ({
      value: !state.value,
    }))
    localStorage.setItem('themeColor', 'false');
  }

  setDeviceWidth = widthPx =>
    Object.keys(sizes).find(size => {
      return widthPx >= sizes[size]
    })

  handleScroll = () => {
    let totalHeight = document.body.clientHeight
    let headerHeight = window.innerHeight
    let scrollY = window.scrollY

    this.setState({
      scrollY,
      headerHeight,
      scrollPosition:
        (scrollY - headerHeight) / (totalHeight - headerHeight - headerHeight),
    })
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeContext.Provider value={this.state}>
        <Container ref={this.container}>
          <GlobalStyle toggle={this.state.value} />
          <Component {...pageProps} />
        </Container>
      </ThemeContext.Provider>
    )
  }
}

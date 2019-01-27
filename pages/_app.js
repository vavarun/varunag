import App, { Container } from 'next/app'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

export const ThemeContext = React.createContext({
  value: false,
  toggleTheme: () => {},
})

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Raleway, sans-serif;
    width: 100vw;
    overflow-x: hidden;
    ${props =>
      props.toggle ? 'background-color: #fff' : 'background-color: #111'}
    ${props => (props.toggle ? 'color: #111' : 'color: #fff')}
`

export default class MyApp extends App {
  constructor(props) {
    super(props)
    this.toggleTheme = () => {
      this.setState(state => ({
        value: !state.value,
      }))
    }
    this.state = { value: false, toggleTheme: this.toggleTheme }
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeContext.Provider value={this.state}>
        <Container>
          <GlobalStyle toggle={this.state.value} />
          <Component {...pageProps} />
        </Container>
      </ThemeContext.Provider>
    )
  }
}

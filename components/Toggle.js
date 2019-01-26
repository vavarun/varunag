import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ThemeContext } from '../pages/_app'

const Wrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 100px;
  height: 38px;
`

const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
`

const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  transition: 0.4s;

  cursor: pointer;
  background-color: #ccc;
  border-radius: ${p => (p.round ? 34 : 0)};

  ${Checkbox}:checked + & {
    background-color: #3b97d3;
  }

  ${Checkbox}:focus + & {
    box-shadow: 0 0 1px #3b97d3;
  }

  &:before {
    position: absolute;
    content: '';
    left: 4px;
    bottom: 4px;

    transition: 0.4s;

    height: 26px;
    width: 26px;
    background-color: white;
    border-radius: ${p => (p.round ? '50%' : '0')};

    ${Checkbox}:checked + & {
      transform: translateX(56px);
    }
  }
`

const Img = styled.img`
  position: absolute;
  height: 24px;
  width: 24px;
  bottom: 7px;
  left: ${props => (props.toggle ? '13px' : '63px')};
`

class Toggle extends React.PureComponent {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ value, toggleTheme }) => (
          <Wrapper>
            <Checkbox onClick={toggleTheme} toggle={value} />
            <Slider />
            <Img
              src={value ? '/static/toggle-sun.svg' : '/static/toggle-moon.svg'}
              toggle={value}
            />
          </Wrapper>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Toggle

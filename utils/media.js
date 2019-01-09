import { css } from 'styled-components'

const sizes = {
  large: 768,
  medium: 600,
  small: 0,
}

export default Object.keys(sizes).reduce((accumulator, label) => {
  const minCondition =
    label !== 'small' ? `(min-width: ${sizes[label] / 16}em)` : ''
  accumulator[label] = (...args) => css`
    @media ${minCondition} {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

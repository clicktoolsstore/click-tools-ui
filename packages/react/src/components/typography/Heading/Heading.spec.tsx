import { render, screen } from '@testing-library/react'
import { Heading, HeadingProps, headingStyle } from '.'

describe('Heading Component', () => {
  it('should render correctly with default props', () => {
    const text = 'Some Heading'
    render(<Heading>{text}</Heading>)

    const element = screen.getByText(text)
    expect(element).toBeInTheDocument()

    // check defaults
    expect(element.tagName).toBe('H2')
    expect(element).toHaveClass(
      'font-montserrat text-neutral-900 text-2xl leading-1.3 font-bold',
      { exact: true },
    )
  })
  it('should render correctly "size" variants', () => {
    const sizes: Record<HeadingProps['size'], any> = {
      '2xl': '',
      '3.5xl': '',
      '5xl': '',
      '7xl': '',
    }
    const text = 'heading-'

    render(
      <>
        {Object.keys(sizes).map((key) => (
          <Heading key={key} size={key as HeadingProps['size']}>
            {text + key}
          </Heading>
        ))}
      </>,
    )

    Object.keys(sizes).forEach((key) => {
      const element = screen.getByText(`${text}${key}`)

      expect(element).toHaveClass(headingStyle.variants.size[key])
      expect(element.className).toMatchSnapshot(`size-${key}`)
    })
  })

  it('should render correctly "weight" variants', () => {
    const weights: Record<HeadingProps['weight'], any> = {
      bold: '',
      black: '',
    }
    const text = 'heading-'

    render(
      <>
        {Object.keys(weights).map((key) => (
          <Heading key={key} weight={key as HeadingProps['weight']}>
            {text + key}
          </Heading>
        ))}
      </>,
    )

    Object.keys(weights).forEach((key) => {
      const element = screen.getByText(`${text}${key}`)

      expect(element).toHaveClass(headingStyle.variants.weight[key])
      expect(element.className).toMatchSnapshot(`weight-${key}`)
    })
  })

  it('should render the correct "as" tag element', () => {
    const as: Record<HeadingProps['as'], any> = {
      h1: '',
      h2: '',
      h3: '',
      h4: '',
      h5: '',
      h6: '',
    }
    const text = 'text-'

    render(
      <>
        {Object.keys(as).map((key) => (
          <Heading key={key} as={key as HeadingProps['as']}>
            {text + key}
          </Heading>
        ))}
      </>,
    )

    Object.keys(as).forEach((key) => {
      const element = screen.getByText(`${text}${key}`)

      expect(element.tagName).toBe(key.toUpperCase())
    })
  })
})

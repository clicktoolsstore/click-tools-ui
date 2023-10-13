import { render, screen } from '@testing-library/react'
import { Text, TextProps, textStyle } from '.'

describe('Text Component', () => {
  it('should render correctly with default props', () => {
    const text = 'Some Text'
    render(<Text>{text}</Text>)

    const element = screen.getByText(text)
    expect(element).toBeInTheDocument()

    // check defaults
    expect(element.tagName).toBe('SPAN')

    expect(element).toHaveClass(
      'font-roboto text-neutral-900 text-base leading-1.3 font-normal',
      { exact: true },
    )
  })
  it('should render correctly "size" variants', () => {
    const sizes: Record<TextProps['size'], any> = {
      md: '',
      xs: '',
      '2xl': '',
    }
    const text = 'text-'

    render(
      <>
        {Object.keys(sizes).map((key) => (
          <Text key={key} size={key as TextProps['size']}>
            {text + key}
          </Text>
        ))}
      </>,
    )

    Object.keys(sizes).forEach((key) => {
      const element = screen.getByText(`${text}${key}`)

      expect(element).toHaveClass(textStyle.variants.size[key])
      expect(element.className).toMatchSnapshot(`size-${key}`)
    })
  })

  it('should render correctly "weight" variants', () => {
    const weights: Record<TextProps['weight'], any> = {
      medium: '',
      bold: '',
      regular: '',
    }
    const text = 'text-'

    render(
      <>
        {Object.keys(weights).map((key) => (
          <Text key={key} weight={key as TextProps['weight']}>
            {text + key}
          </Text>
        ))}
      </>,
    )

    Object.keys(weights).forEach((key) => {
      const element = screen.getByText(`${text}${key}`)

      expect(element).toHaveClass(textStyle.variants.weight[key])
      expect(element.className).toMatchSnapshot(`weight-${key}`)
    })
  })
  it('should render correctly "leading" variants', () => {
    const leading: Record<TextProps['leading'], any> = {
      '1.3': '',
      '1.6': '',
    }
    const text = 'text-'

    render(
      <>
        {Object.keys(leading).map((key) => (
          <Text key={key} leading={key as TextProps['leading']}>
            {text + key}
          </Text>
        ))}
      </>,
    )

    Object.keys(leading).forEach((key) => {
      const element = screen.getByText(`${text}${key}`)

      expect(element).toHaveClass(textStyle.variants.leading[key])
      expect(element.className).toMatchSnapshot(`leading-${key}`)
    })
  })

  it('should render the correct "as" tag element', () => {
    const as: Record<TextProps['as'], any> = {
      span: '',
      label: '',
      p: '',
      div: '',
    }
    const text = 'text-'

    render(
      <>
        {Object.keys(as).map((key) => (
          <Text key={key} as={key as TextProps['as']}>
            {text + key}
          </Text>
        ))}
      </>,
    )

    Object.keys(as).forEach((key) => {
      const element = screen.getByText(`${text}${key}`)

      expect(element.tagName).toBe(key.toUpperCase())
    })
  })
})

import { Button } from '.'
import { button as btnStyles } from './styles'
import { render, screen } from '@testing-library/react'

describe('Button Component', () => {
  it('should render correctly with defaults', async () => {
    render(<Button>Hello</Button>)
    const button = screen.getByRole('button') as HTMLButtonElement

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Hello')
    expect(button.type).toBe('button')
    expect(button).toBeEnabled()
    expect(button).toHaveClass(btnStyles({ variant: 'primary', size: 'md' }), {
      exact: true,
    })
  })

  it('should be able to add new classNames', () => {
    const className = 'border border-primary-900'
    render(<Button className={className}>Hello</Button>)
    const button = screen.getByRole('button') as HTMLButtonElement

    expect(button).toHaveClass(
      btnStyles({ variant: 'primary', size: 'md', className }),
      {
        exact: true,
      },
    )
    expect(button).toHaveClass(className)
  })
})

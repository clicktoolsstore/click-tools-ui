import { Button } from '.'
import { render, screen } from '@testing-library/react'

describe('Button Component', () => {
  it('should render correctly', async () => {
    render(<Button>Hello</Button>)
    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
  })
})

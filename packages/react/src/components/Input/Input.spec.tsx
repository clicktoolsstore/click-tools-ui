import { render, screen } from '@testing-library/react'
import { Input } from '.'

describe('Input Component', () => {
  it('should render correctly', () => {
    render(<Input />)

    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toBeInTheDocument()
  })
})

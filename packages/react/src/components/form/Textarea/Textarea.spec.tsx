import { render, screen } from '@testing-library/react'
import { Textarea } from '.'

describe('Input Component', () => {
  it('should render correctly', () => {
    render(<Textarea />)

    const textareaElement = screen.getByRole('textbox')
    expect(textareaElement).toBeInTheDocument()
  })
})

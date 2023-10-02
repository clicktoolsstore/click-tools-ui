import { cn } from './cn'

describe('cn utility', () => {
  it('should merge the classNames correctly', () => {
    const result = cn('bg-darkest', 'text-lightest', [
      'border',
      'border-primary-500',
    ])
    expect(result).toEqual('bg-darkest text-lightest border border-primary-500')

    const result2 = cn('bg-darkest', 'text-lightest')
    expect(result2).toEqual('bg-darkest text-lightest')
  })

  it('should merge and keep the last classNames correctly', () => {
    const result = cn('bg-darkest text-lightest border-2', 'border')
    expect(result).toEqual('bg-darkest text-lightest border')
  })

  it('should merge based on the conditions', () => {
    const result = cn(
      'border border-primary-500',
      true && 'border-primary-900',
      false && 'border-primary-600',
    )
    expect(result).toEqual('border border-primary-900')

    const result2 = cn([
      'border',
      true && 'border-primary-900',
      false && 'border-primary-600',
    ])
    expect(result2).toEqual('border border-primary-900')
  })
})

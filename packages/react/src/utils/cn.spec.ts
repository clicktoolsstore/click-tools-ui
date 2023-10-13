import { cn } from './cn'

describe('cn utility', () => {
  it('should merge the classNames correctly', () => {
    const result = cn('bg-black', 'text-white', [
      'border',
      'border-primary-500',
    ])
    expect(result).toEqual('bg-black text-white border border-primary-500')

    const result2 = cn('bg-black', 'text-white')
    expect(result2).toEqual('bg-black text-white')
  })

  it('should merge and keep the last classNames correctly', () => {
    const result = cn('border-2 bg-black text-white', 'border')
    expect(result).toEqual('bg-black text-white border')
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

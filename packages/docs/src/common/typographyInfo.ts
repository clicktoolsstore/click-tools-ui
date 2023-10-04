import { TypographyProps } from '@click-tools-ui/react'

export type Keys = Exclude<TypographyProps['variant'], undefined>
export const typographyInfo: Record<
  Keys,
  { label: string; description: string }
> = {
  h1: {
    label: 'h1 Title',
    description: '128px/156px .0 700 primary-900',
  },
  h2: {
    label: 'h2 Title',
    description: '96px/118px .0 600 primary-900',
  },
  h3: {
    label: 'h3 Title',
    description: '72px/88px .0 500 primary-900',
  },
  h4: {
    label: 'h4 Title',
    description: '32px/40px .0 500 primary-900',
  },
  //
  t1: { label: 't1 Text', description: '32px/40px .0 500 primary-900' },
  t2: { label: 't2 Text', description: '24px/30px .0 500 primary-900' },
  t3: { label: 't3 Text', description: '16px/20px .0 600 primary-900' },
  t4: { label: 't4 Text', description: '16px/20px .0 400 primary-900' },
  t5: { label: 't5 Text', description: '12px/15px .0 500 primary-900' },
}

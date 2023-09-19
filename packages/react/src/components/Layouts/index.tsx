import { styled } from '~/styles'

export const HStack = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  alignItems: 'start',
})

export const VStack = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
})

import { styled } from '~/styles'

const Button = styled('button', {
  all: 'unset',
  boxSizing: 'border-box',
  cursor: 'pointer',

  '&[disabled]': {
    cursor: 'not-allowed',
  },

  '&[disabled][data-isLoading="true"]': {
    cursor: 'progress',
  },

  borderRadius: 30,
  padding: '$6',
  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary-500',
        color: '$lightest',

        '&:focus': {
          boxShadow: '0 0 0 2px $colors$darkest',
        },
      },
      secondary: {
        backgroundColor: '$lightest',
        color: '$primary-500',
      },
      mono: {
        backgroundColor: '$lightest',
        color: '$darkest',
      },
      cta: {
        backgroundColor: '$alert-500',
        color: '$lightest',
      },
    },

    full: {
      true: {
        width: '100%',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export const Styles = { Button }

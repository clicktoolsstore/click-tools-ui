import { colors } from '@click-tools-ui/tokens'

import defaultTheme from 'tailwindcss/defaultTheme'
const spacing = defaultTheme.spacing

const spaces = Object.entries(spacing)
  .map(([key, value]) => {
    if (isNaN(Number(key))) {
      return {
        key,
        value: 1 / 16 + 'rem',
        valuePixel: value as string,
      }
    }

    return {
      key,
      value: value.replace('px', 'rem'),
      valuePixel: Number(key) * 4 + 'px',
    }
  })
  .sort((a, b) => parseInt(a.valuePixel) - parseInt(b.valuePixel))

export const SpaceTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Tokens</th>
          <th>Value</th>
          <th>Value (Pixels)</th>
          <th>Representation</th>
        </tr>
      </thead>
      <tbody>
        {spaces.map((item) => (
          <tr key={String(item.key)}>
            <td>{item.key}</td>
            <td>{item.value}</td>
            <td>{item.valuePixel}</td>
            <td>
              <div
                style={{
                  background: colors['primary-500'],
                  width: item.valuePixel,
                  height: '12px',
                }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

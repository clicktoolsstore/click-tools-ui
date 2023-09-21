import { colors, space } from '@click-tools-ui/tokens'

const spaces = Object.entries(space)
  .map(([key, value]) => ({
    value,
    key,
    valuePixel: Number(key) * 4 + 'px',
  }))
  .sort((a, b) => Number(a.key) - Number(b.key))

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

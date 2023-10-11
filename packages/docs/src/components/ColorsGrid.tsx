import { colors } from '@click-tools-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return (
    <div className="sb-unstyled divide-y-2 divide-slate-600 overflow-hidden rounded-md border-2 border-slate-600 shadow shadow-primary-900 ">
      {Object.entries(colors).map(([key, color]) => {
        return (
          <div
            key={key}
            className="sb-unstyled p-8"
            style={{
              background: color,
            }}
          >
            <div
              className="flex justify-between"
              style={{
                color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#fff',
              }}
            >
              <strong>${key}</strong>
              <span>{color}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

import { colors } from '@click-tools-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return (
    <div className="overflow-hidden sb-unstyled divide-y-2 divide-slate-600 border-2 border-slate-600 rounded-md shadow-md shadow-red-700 ">
      {Object.entries(colors).map(([key, color]) => {
        return (
          <div
            key={key}
            className="p-8 sb-unstyled"
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

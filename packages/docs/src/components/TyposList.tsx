import { headingTypo, labelTypo, bodyTypo } from '@click-tools-ui/react'
export const TyposList = () => {
  const typos = {
    headingSizes: {
      keys: Object.keys(headingTypo.variants.size),
      builder: headingTypo,
      baseLabel: 'Heading',
    },
    labelSizes: {
      keys: Object.keys(labelTypo.variants.size),
      builder: labelTypo,
      baseLabel: 'Label',
    },
    bodyTypos: {
      keys: Object.keys(bodyTypo.variants.size),
      builder: bodyTypo,
      baseLabel: 'Body',
    },
  } as const
  console.log('eee', headingTypo.base)

  return (
    <div className="flex flex-col gap-4">
      {Object.entries(typos).map(([key, value]) => (
        <div
          key={key}
          className="bg-slate-50 p-3 rounded-md border border-primary-500"
        >
          {value.keys.map((k) => (
            <h2
              key={k}
              className={value.builder({
                size: k as any, //eslint-disable-line 
                className: 'sb-unstyled',
              })}
            >
              {value.baseLabel + ' - ' + k}
            </h2>
          ))}
        </div>
      ))}
    </div>
  )
}

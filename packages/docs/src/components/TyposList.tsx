import { typography, TypographyProps } from '@click-tools-ui/react'
import { typographyInfo } from '~/common/typographyInfo'

export const TyposList = () => {
  return (
    <div className="flex flex-col gap-4 bg-slate-50 p-4">
      {Object.entries(typographyInfo).map(([key, value]) => (
        <div key={key}>
          <p
            className={typography({
              variant: key as keyof TypographyProps['variant'],
              className: 'sb-unstyled',
            })}
          >
            {value.label}
          </p>
          <small>{value.description}</small>
          <hr className="w-full bg-primary-500" />
        </div>
      ))}
    </div>
  )
}

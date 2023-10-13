import { cn } from '@click-tools-ui/react'
import { FC } from 'react'
import { labelSBStyle, smallSBStyle } from './ui/typography'

type Options = {
  cls: string
  property: string
  comment?: string
  custom?: boolean
}
export const BorderRadiosList: FC = () => {
  const pickedOptions: Options[] = [
    { cls: 'none', property: '0px' },
    { cls: 'rounded', property: '0.25rem', comment: '4px' },
    { cls: 'rounded-xl', property: '0.75rem', comment: '12px' },
    { cls: 'rounded-3xl', property: '1.5rem', comment: '24px' },
    { cls: 'rounded-4xl', property: '2rem', comment: '32px', custom: true },
    { cls: 'rounded-full', property: '9999px' },
  ]

  return (
    <div className="flex flex-wrap gap-4 rounded-md bg-sb-bg-light p-4">
      {pickedOptions.map(({ cls, property, comment, custom }) => (
        <div key={cls} className="sb-unstyled flex flex-col">
          <div className={cn(['h-24 w-24 bg-primary-500', 'mb-1', cls])} />
          <span className={labelSBStyle()}>
            <strong>class:</strong> {custom && '*'}
            {cls}
          </span>
          <small className={smallSBStyle()}>
            <strong>Property:</strong>&nbsp;
            {property} &nbsp;
            <br />
            {comment && <em className=" text-[10px]">{` /* ${comment} */`}</em>}
          </small>
        </div>
      ))}
    </div>
  )
}

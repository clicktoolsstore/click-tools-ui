import { cn } from '@click-tools-ui/react'
import { FC } from 'react'

type Options = {
  cls: string
  property: string
  comment?: string
  custom?: boolean
}
export const BorderRadiosList: FC = () => {
  const pickedOptions: Options[] = [
    { cls: 'none', property: '0px' },
    { cls: 'rounded', property: '0.25rem;', comment: '4px' },
    { cls: 'rounded-xl', property: '0.75rem;', comment: '12px' },
    { cls: 'rounded-3xl', property: '1.5rem;', comment: '24px' },
    { cls: 'rounded-4xl', property: '2rem', comment: '32px', custom: true },
    { cls: 'rounded-full', property: '9999px' },
  ]

  return (
    <div className="flex flex-wrap p-4 bg-sb-bg-light gap-4 rounded-md">
      {pickedOptions.map(({ cls, property, comment, custom }) => (
        <div key={cls} className="flex flex-col sb-unstyled">
          <div className={cn(['w-24 h-24 bg-primary-500', cls])} />
          <span className="text-gray-900 font-bold text-sm mt-2">
            Class: {custom && '*'}
            {cls}
          </span>
          <small className="text-gray-600 text-xs font-semibold">
            Property: {property} &nbsp;
            <br />
            {comment && <em className=" text-[10px]">{` /* ${comment} */`}</em>}
          </small>
        </div>
      ))}
    </div>
  )
}

import { FC } from 'react'
import { opacity } from '@click-tools-ui/tokens'
import { cn } from '@click-tools-ui/react'
import { labelSBStyle } from './ui/typography'

export const OpacityBoxes = ({
  className,
}: {
  className: string | string[]
}) => {
  console.log('dd', className)
  return (
    <div className="relative w-fit">
      <div className="h-12 w-12 bg-primary-500" />
      <div
        className={cn([
          'absolute -right-[30%] -top-[30%] z-10 h-12 w-12 bg-black',
          className,
        ])}
      />
    </div>
  )
}

export const OpacityList: FC = () => {
  return (
    <div className="flex flex-wrap gap-4 rounded-md bg-sb-bg-light p-4 pt-8">
      {Object.entries(opacity).map(([key]) => (
        <div key={key}>
          <OpacityBoxes className={[`opacity-` + key]} />

          <span className={labelSBStyle()}>
            class: {'*'}
            opacity-{key}
          </span>
        </div>
      ))}

      <div>
        <div className="relative w-fit">
          <div className="h-12 w-12 bg-primary-500" />
          <div
            className="absolute -right-[30%] -top-[30%] z-10 h-12 w-12 bg-black"
            style={{ opacity: 0.8 }}
          />
        </div>

        <span className={labelSBStyle()}>Class: opacity-{80}</span>
      </div>
    </div>
  )
}

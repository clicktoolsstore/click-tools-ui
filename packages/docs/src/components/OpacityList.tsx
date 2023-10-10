import { FC } from 'react'
import { opacity } from '@click-tools-ui/tokens'
import { cn } from '@click-tools-ui/react'

export const OpacityBoxes = ({
  className,
}: {
  className: string | string[]
}) => {
  console.log('dd', className)
  return (
    <div className="relative w-fit">
      <div className="w-12 h-12 bg-primary-500" />
      <div
        className={cn([
          'w-12 h-12 bg-black absolute z-10 -top-[30%] -right-[30%]',
          className,
        ])}
      />
    </div>
  )
}

export const OpacityList: FC = () => {
  return (
    <div className="p-4 pt-8 bg-sb-bg-light rounded-md flex gap-4 flex-wrap">
      {Object.entries(opacity).map(([key]) => (
        <div key={key}>
          <OpacityBoxes className={[`opacity-` + key]} />

          <span className="text-gray-900 font-bold text-sm mt-2">
            Class: {'*'}
            opacity-{key}
          </span>
        </div>
      ))}
      <div>
        <div className="relative w-fit ">
          <div className="w-12 h-12 bg-primary-500" />
          <div
            className="w-12 h-12 bg-black absolute z-10 -top-[30%] -right-[30%]"
            style={{ opacity: 0.8 }}
          />
        </div>

        <span className="text-gray-900 font-bold text-sm mt-2">
          Class: opacity-{80}
        </span>
      </div>
    </div>
  )
}

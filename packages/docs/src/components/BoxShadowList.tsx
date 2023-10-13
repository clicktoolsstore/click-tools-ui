import { FC } from 'react'
import { labelSBStyle } from './ui/typography'

export const BoxShadowList: FC = () => {
  return (
    <div className="flex flex-wrap gap-4 rounded-md bg-sb-bg-light p-8">
      <div>
        <div className="sb-unstyled mb-4 h-20 w-20 rounded-md bg-dark-white shadow-subtle" />
        <span className={labelSBStyle()}>class: *shadow-subtle</span>
      </div>
      <div>
        <div className="sb-unstyled mb-4 h-20 w-20 rounded-md bg-dark-white shadow-smooth" />
        <span className={labelSBStyle()}>class: *shadow-smooth</span>
      </div>
      <div>
        <div className="sb-unstyled mb-4 h-20 w-20 rounded-md bg-dark-white shadow-interesting" />
        <span className={labelSBStyle()}>class: *shadow-interesting</span>
      </div>
    </div>
  )
}

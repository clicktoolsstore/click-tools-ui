import { FC } from 'react'
import { labelSBStyle } from './ui/typography'
import PlateImg from '~/assets/plate1.png'
import Icon from '~/assets/home.svg'

export const DropShadowList: FC = () => {
  return (
    <div className="flex flex-wrap gap-8 rounded-md bg-sb-bg-light p-8">
      <div>
        <div className="sb-unstyled mb-8 flex gap-4  rounded-md">
          <img
            src={PlateImg}
            alt="icon"
            className="h-12 w-12 rounded-full drop-shadow-blur-lg-black-07"
          />

          <div className="h-12 w-12 rounded-full bg-pink-500 drop-shadow-blur-lg-black-07" />

          <div className="h-12 w-12 rounded-full border bg-sb-bg-light drop-shadow-blur-lg-black-07" />
        </div>
        <span className={labelSBStyle()}>
          class: *drop-shadow-blur-lg-black-07
        </span>
      </div>
      <div>
        <div className="sb-unstyled mb-8 flex gap-4  rounded-md">
          <img
            src={Icon}
            alt="icon"
            className="h-12 w-12 rounded-full drop-shadow-blur-md-primary-40"
          />
          <div className="h-12 w-12 rounded-full bg-sb-bg-light drop-shadow-blur-md-primary-40" />
        </div>
        <span className={labelSBStyle()}>
          class: *drop-shadow-blur-md-primary-40
        </span>
      </div>
    </div>
  )
}

import { FC } from 'react'
import { cn } from '@click-tools-ui/react'

const styles = {
  list: cn('flex bg-sb-bg-light gap-6 rounded-md flex-wrap'),
  box: cn('p-6  flex flex-col'),
  'box-header': cn(
    'sb-unstyled mb-12 flex justify-between items-center flex-wrap-reverse gap-3',
  ),
  headingBase: cn('sb-unstyled text-gray-600 text-2xl leading-snug font-light'),
  textBase: cn('text-3xl font-medium text-gray-700 sb-unstyled'),
  fontText: (className: string | string[]) =>
    cn('text-gray-700 text-7xl !leading-normal sb-unstyled', className),
  body: cn('flex flex-col gap-3 mb-14 sb-unstyled'),
  cardDoc: cn('p-3 bg-gray-200 rounded-sm w-fit sb-unstyled'),
  footer: cn('flex flex-col gap-10'),
}

export const FontFamiliesList: FC = () => {
  return (
    <div className={styles.list}>
      {/* Roboto */}
      <div className={styles.box}>
        <div className={styles.body}>
          <h3 className={styles.headingBase}>Font Family - Text</h3>
          <span className={styles.fontText('font-roboto font-bold')}>
            Roboto
          </span>

          <div className={styles.cardDoc}>
            <span className="font-medium">The font can be accessed by </span>
            <strong className="underline">
              <a
                href="https://fonts.google.com/?query=roboto"
                target="_blank"
                rel="noreferrer"
              >
                Google Fonts
              </a>
            </strong>
          </div>
        </div>

        <div className={styles.footer}>
          <div>
            <h3 className={styles.headingBase}>Font Weights</h3>
            <span className={styles.textBase}>Regular & Medium & Bold</span>
          </div>

          <div>
            <h3 className={styles.headingBase}>Line Height</h3>
            <span className={styles.textBase}>130%</span>
          </div>

          <div>
            <h3 className={styles.headingBase}>Font Sizes</h3>
            <span className={styles.textBase}>12,14,16,20 & 24 px</span>
          </div>
        </div>
      </div>
      {/* MontSerrat */}
      <div className={styles.box}>
        <div className={styles.body}>
          <h3 className={styles.headingBase}>Font Family - Heading</h3>
          <span className={styles.fontText('font-montserrat  font-bold')}>
            Mont Serrat
          </span>

          <div className={styles.cardDoc}>
            <span className="font-medium">The font can be accessed by </span>
            <strong className="underline">
              <a
                href="https://fonts.google.com/specimen/Montserrat?query=montserrat"
                target="_blank"
                rel="noreferrer"
              >
                Google Fonts
              </a>
            </strong>
          </div>
        </div>

        <div className={styles.footer}>
          <div>
            <h3 className={styles.headingBase}>Font Weights</h3>
            <span className={styles.textBase}>Semibold & Bold</span>
          </div>

          <div>
            <h3 className={styles.headingBase}>Line Height</h3>
            <span className={styles.textBase}>100% & 130%</span>
          </div>

          <div>
            <h3 className={styles.headingBase}>Font Sizes</h3>
            <span className={styles.textBase}>12,14,16,20 & 24 px</span>
          </div>
        </div>
      </div>
    </div>
  )
}

import { FC } from 'react'
import { cn } from '@click-tools-ui/react'

const styles = {
  list: cn('flex flex-wrap gap-6 rounded-md bg-sb-bg-light'),
  box: cn('flex flex-col p-6'),
  'box-header': cn(
    'sb-unstyled mb-12 flex flex-wrap-reverse items-center justify-between gap-3',
  ),
  headingBase: cn(
    'sb-unstyled font-roboto text-2xl font-light leading-snug text-gray-600',
  ),
  textBase: cn('sb-unstyled font-roboto text-3.5xl font-medium text-gray-700'),
  fontText: (className: string | string[]) =>
    cn('sb-unstyled text-7xl !leading-normal text-gray-700', className),
  body: cn('sb-unstyled mb-14 flex flex-col gap-3'),
  cardDoc: cn('sb-unstyled w-fit rounded-sm bg-gray-200 p-3'),
  footer: cn('flex flex-col gap-10'),
}

type FontFamilyDescription = {
  heading: string
  family: string
  familyClass: string
  sourceURL: string
  fontWeights: string
  lineHeight: string
  fontSizes: string
}

export const FontFamiliesList: FC = () => {
  const fontsFamilies: FontFamilyDescription[] = [
    {
      heading: 'Heading / Title',
      family: 'Mont Serrat',
      familyClass: 'font-montserrat',
      sourceURL: 'https://fonts.google.com/specimen/Montserrat',
      fontWeights: 'Bold & Black',
      lineHeight: '130%',
      fontSizes: '24, 32, 48, 72px',
    },
    {
      heading: 'Text / Paragraph',
      family: 'Roboto',
      familyClass: 'font-roboto',
      sourceURL: 'https://fonts.google.com/?query=roboto',
      fontWeights: 'Regular & Medium & Bold',
      lineHeight: '130% & 160%',
      fontSizes: '12,16, 24 px',
    },
  ]

  return (
    <div className={styles.list}>
      {fontsFamilies.map((f) => (
        <div key={f.family} className={styles.box}>
          <div className={styles.body}>
            <h3 className={styles.headingBase}>Font Family - {f.heading}</h3>
            <span className={styles.fontText(['font-bold', f.familyClass])}>
              {f.family}
            </span>

            <div className={styles.cardDoc}>
              <span className="font-medium">The font can be accessed by </span>
              <strong className="underline">
                <a href={f.sourceURL} target="_blank" rel="noreferrer">
                  Google Fonts
                </a>
              </strong>
            </div>
          </div>

          <div className={styles.footer}>
            <div>
              <h3 className={styles.headingBase}>Font Weights</h3>
              <span className={styles.textBase}>{f.fontWeights}</span>
            </div>

            <div>
              <h3 className={styles.headingBase}>Line Height</h3>
              <span className={styles.textBase}>{f.lineHeight}</span>
            </div>

            <div>
              <h3 className={styles.headingBase}>Font Sizes</h3>
              <span className={styles.textBase}>{f.fontSizes}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

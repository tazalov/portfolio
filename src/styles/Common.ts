import { theme } from './Theme'

type FontPT = {
  family?: string
  weight?: number
  color?: string
  lineHeight?: number
  Fmin?: number
  Fmax?: number
}

export const font = ({ family, weight, color, lineHeight, Fmin, Fmax }: FontPT) => `
  font-family: ${family || 'Fira Code'};
  font-weight: ${weight || 400};
  color: ${color || theme.colors.primaryFont};
  line-height: ${lineHeight || 1.5};
  font-size: calc((100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`

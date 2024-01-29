import iconsSprite from '../../assets/img/icons/icons-sprite.svg'

type IconPT = {
  iconId: string
  width?: string
  height?: string
  viewBox?: string
}

export const Icon = ({ width, height, viewBox, iconId }: IconPT) => {
  return (
    <svg
      width={width || '50'}
      height={height || '50'}
      viewBox={viewBox || '0 0 50 50'}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconsSprite}#${iconId}`} />
    </svg>
  )
}

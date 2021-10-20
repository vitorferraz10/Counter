import { ButtonHTMLAttributes } from 'react'
import { ButtonCustom } from './styled'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {
   return (
      <ButtonCustom className="button"{...props} />
   )
}

export default Button
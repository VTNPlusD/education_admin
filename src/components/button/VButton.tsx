import { Button } from 'antd'
import { CSSProperties } from 'react'
import { colors } from 'utils/colors'

type Props = {
  isLoading?: boolean
  title: string
  type?:
    | 'link'
    | 'text'
    | 'ghost'
    | 'default'
    | 'primary'
    | 'dashed'
    | undefined
  color?: string
  style?: CSSProperties
}

const VButton = ({
  isLoading = false,
  title,
  type = 'primary',
  color = colors.PRIMARY_LINEAR_MAIN,
  style
}: Props) => {
  return (
    <Button
      style={{ ...stylesWithParam(color).btn, ...style }}
      loading={isLoading}
      type={type}
      htmlType='submit'>
      {title}
    </Button>
  )
}

const stylesWithParam = (val: string) => {
  const obj = { btn: {} }
  obj.btn = {
    background: val,
    boxShadow: colors.BOX_SHADOW_MAIN,
    borderRadius: 4,
    border: 'none'
  }
  return obj
}

export default VButton

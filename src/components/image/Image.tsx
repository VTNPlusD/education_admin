import { DEFAULT_AVATAR_URL } from 'constants/general'
import { useEffect, useState } from 'react'

type Props = {
  src: string
  className?: string
  onClick?: () => void
}

const Image = ({ src, className, onClick }: Props) => {
  const [url, setUrl] = useState(src)

  useEffect(() => {
    setUrl(src)
  }, [src])

  const handleError = () => {
    setUrl(DEFAULT_AVATAR_URL)
  }
  return (
    <img
      onClick={onClick}
      src={url}
      className={className}
      alt=''
      onError={handleError}
    />
  )
}

export default Image

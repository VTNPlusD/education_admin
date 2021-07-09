import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from 'styles/VHeader.module.scss'

const VHeader = () => {
  const { t } = useTranslation()
  const [searchLoading, setSearchLoading] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = () => {
    setSearchLoading(true)
  }

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <SearchOutlined className={styles.iconSearch} />
        <Input
          onChange={(e) => setSearchValue(e.target.value)}
          onPressEnter={handleSearch}
          placeholder={t('header.searchTxt')}
          bordered={false}
        />
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.avatarContainer}>
          <img
            className={styles.avatarImg}
            alt=''
            src='https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'
          />
        </div>
      </div>
    </div>
  )
}

export default VHeader

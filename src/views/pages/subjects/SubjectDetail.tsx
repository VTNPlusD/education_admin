import { ArrowLeftOutlined } from '@ant-design/icons'
import HeaderRoute from 'components/headerRoute/HeaderRoute'
import { IClass } from 'interfaces/interfaces/IClass'
import { ISubject } from 'interfaces/interfaces/ISubject'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory, useParams } from 'react-router-dom'
import classes from 'styles/ClassesManagement.module.scss'
import ChapterItem from './components/ChapterItem'

type Params = {
  classId: string
  subjectId: string
}

type Props = {
  getSubject: (id: number) => void
  getClassDetail: (id: number) => void
  subjectDetail: ISubject
  classDetail: IClass
}

const SubjectDetail = ({
  getSubject,
  getClassDetail,
  subjectDetail,
  classDetail
}: Props) => {
  const { t } = useTranslation()
  const history = useHistory()
  const { classId, subjectId } = useParams<Params>()

  useEffect(() => {
    if (subjectId) getSubject(parseInt(subjectId))
  }, [subjectId, getSubject])

  useEffect(() => {
    if (classId && classDetail.id === 0) {
      getClassDetail(parseInt(classId))
    }
  }, [classId, getClassDetail, classDetail.id])

  const handleAddChapter = () => {}

  const handleGoBack = () => {
    history.goBack()
  }

  const renderListSubject = () => {
    return (
      <>
        <h2 style={{ textAlign: 'center', marginBottom: 8 }}>
          {' '}
          {t('chapter.list')}
        </h2>
        <table className={classes.tableContainer}>
          <thead>
            <tr style={{ textAlign: 'left' }}>
              <th> {t('chapter.id')} </th>
              <th> {t('chapter.name')} </th>
              <th> {t('chapter.order')} </th>
              <th> {t('chapter.active')} </th>
              <th> {t('chapter.action')} </th>
              <th> {t('chapter.view')} </th>
            </tr>
          </thead>
          <tbody className={classes.tableContainer}>
            {subjectDetail.__chapters__ &&
              subjectDetail.__chapters__.map((chapter, index) => (
                <ChapterItem key={chapter.id} chapter={chapter} index={index} />
              ))}
          </tbody>
        </table>
      </>
    )
  }

  return (
    <div className={classes.container}>
      <HeaderRoute
        title={classDetail.name.concat(' - ').concat(subjectDetail.name)}
        Icon={ArrowLeftOutlined}
        iconRight={true}
        handleClickIconLeft={handleGoBack}
        handleClickIconRight={handleAddChapter}
      />
      {renderListSubject()}
    </div>
  )
}

export default SubjectDetail

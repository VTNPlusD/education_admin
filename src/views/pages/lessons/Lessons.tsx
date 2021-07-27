import { ArrowLeftOutlined } from '@ant-design/icons'
import HeaderRoute from 'components/headerRoute/HeaderRoute'
import VModal from 'components/modal/VModal'
import { IChapter } from 'interfaces/interfaces/IChapter'
import { IClass } from 'interfaces/interfaces/IClass'
import { ILesson } from 'interfaces/interfaces/ILesson'
import { IPagination } from 'interfaces/interfaces/IPayload'
import { ISubject } from 'interfaces/interfaces/ISubject'
import { IListRequest } from 'interfaces/request/IListRequest'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import 'react-quill/dist/quill.snow.css'
import { useHistory, useParams } from 'react-router-dom'
import { listLessonRequest } from 'services/requests/listLessonRequest'
import classes from 'styles/ClassesManagement.module.scss'
import LessonItem from './components/LessonItem'
import ModalCreate from './components/ModalCreate'

type Params = {
  classId: string
  subjectId: string
  chapterId: string
}

type Props = {
  getListLesson: (request: IListRequest) => void
  getClassDetail: (id: number) => void
  getSubjectDetail: (id: number) => void
  getChapterDetail: (id: number) => void
  classDetail: IClass
  subjectDetail: ISubject
  chapterDetail: IChapter
  listLesson: IPagination<ILesson[]>
}

const Lessons = ({
  getListLesson,
  getClassDetail,
  getSubjectDetail,
  getChapterDetail,
  listLesson,
  classDetail,
  subjectDetail,
  chapterDetail
}: Props) => {
  const { classId, subjectId, chapterId } = useParams<Params>()
  const { t } = useTranslation()
  const history = useHistory()
  const [modalCreate, setModalCreate] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const [content, setContent] = useState<string>('')

  useEffect(() => {
    if (parseInt(classId) !== 0) getClassDetail(parseInt(classId))
  }, [classId, getClassDetail])

  useEffect(() => {
    if (parseInt(subjectId) !== 0) getSubjectDetail(parseInt(subjectId))
  }, [subjectId, getSubjectDetail])

  useEffect(() => {
    if (parseInt(chapterId) !== 0) getChapterDetail(parseInt(chapterId))
  }, [chapterId, getChapterDetail])

  useEffect(() => {
    getListLesson(listLessonRequest(chapterId))
  }, [chapterId, getListLesson])

  const handleGoBack = () => {
    history.goBack()
  }

  const handleDelete = (id: number) => {}

  const handleEdit = (lesson: ILesson) => {}

  const handleView = (id: number) => {}

  const handleCreateLesson = () => {
    setModalCreate(true)
  }

  const handleChangeName = (val: string) => {
    setName(val)
  }

  const handleChangeContent = (val: string) => {
    setContent(val)
  }

  const handleSubmitCreate = () => {
    const val = { name, content }
    console.log(val)
  }

  const renderList = () => {
    return (
      <>
        <h2 style={{ textAlign: 'center', marginBottom: 8 }}>
          {t('lesson.list')}
        </h2>
        <table className={classes.tableContainer}>
          <thead>
            <tr style={{ textAlign: 'left' }}>
              <th> {t('management.id')} </th>
              <th> {t('management.name')} </th>
              <th> {t('management.order')} </th>
              <th> {t('management.active')} </th>
              <th> {t('management.action')} </th>
              <th> {t('management.view')} </th>
            </tr>
          </thead>
          <tbody className={classes.tableContainer}>
            {listLesson.content.map((lesson, index) => (
              <LessonItem
                handleDelete={() => handleDelete(lesson.id)}
                handleEdit={() => handleEdit(lesson)}
                handleView={() => handleView(lesson.id)}
                key={lesson.id}
                lesson={lesson}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </>
    )
  }

  const renderModalCreate = () => {
    return (
      <VModal
        visible={modalCreate}
        title={t('lesson.create')}
        handleOk={handleSubmitCreate}
        handleCancel={() => setModalCreate(false)}
        content={
          <ModalCreate
            handleChangeName={handleChangeName}
            handleChangeContent={handleChangeContent}
          />
        }
      />
    )
  }

  return (
    <div className={classes.container}>
      <HeaderRoute
        title={classDetail.name
          .concat(' - ')
          .concat(subjectDetail.name)
          .concat(' - ')
          .concat(chapterDetail.name)}
        Icon={ArrowLeftOutlined}
        iconRight={true}
        handleClickIconLeft={handleGoBack}
        handleClickIconRight={handleCreateLesson}
      />
      {renderList()}
      {modalCreate ? renderModalCreate() : <></>}
    </div>
  )
}

export default Lessons

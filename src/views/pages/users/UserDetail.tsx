import { IUser } from 'interfaces/IUser'
import { useEffect } from 'react'

type Props = {
  match: any
  userDetail: IUser
  getUserById: (id: number) => void
}

const UserDetail = ({ match, userDetail, getUserById }: Props) => {
  const id = match.params?.id

  console.log(userDetail)
  
  useEffect(() => {
    if (id) {
      getUserById(id)
    }
  }, [id, getUserById])

  return <div>Detail</div>
}

export default UserDetail

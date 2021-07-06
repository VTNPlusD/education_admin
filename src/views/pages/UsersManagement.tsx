import { useEffect } from 'react'
import classes from 'styles/UsersManagement.module.scss'

type Props = {
  getUsersList: () => void
}

const UsersManagement = ({ getUsersList }: Props) => {
  useEffect(() => {
    getUsersList()
  }, [getUsersList])

  return (
    <div>
      <table className={classes.tableContainer}>
        <thead>
          <tr style={{ textAlign: 'left' }}>
            <th> User </th>
            <th> First name </th>
            <th> Progress </th>
            <th> Amount </th>
            <th> Deadline </th>
          </tr>
        </thead>
        <tbody className={classes.tableContainer}>
          <tr>
            <td className='py-1'>
              <img src='' alt='' />
            </td>
            <td> Herman Beck </td>
            <td>
              <div className='progress'>
                <div
                  className='progress-bar bg-success'
                  role='progressbar'
                  style={{ width: '25%' }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </td>
            <td> $ 77.99 </td>
            <td> May 15, 2015 </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default UsersManagement

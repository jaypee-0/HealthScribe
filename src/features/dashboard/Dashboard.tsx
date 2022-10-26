import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

function Dashboard() {

  const currentUser = useSelector((state: RootState) => state.session.currentUser)
  const accessToken = useSelector((state: RootState) => state.session.accessToken)
  const refreshToken = useSelector((state: RootState) => state.session.refreshToken)

  return (
    <section>

    <div>Dashboard</div>

    <ul>
      <li>User: 
      <ul>
        <li>Id: {currentUser?.id}</li>
        <li>Email: {currentUser?.email}</li>
        <li>Created At: {currentUser?.createdAt}</li>
      </ul>
      </li>
      <li>Access Token: {accessToken}</li>
      <li>Refresh Token: {refreshToken}</li>
    </ul>
    </section>
  )
}

export default Dashboard

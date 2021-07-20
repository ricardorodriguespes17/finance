import Main from '../../components/Main';
import Profile from '../../components/Profile';
import SideBar from '../../components/SideBar';
import './styles.css';

function Dashboard() {
  return (
    <div className="container">
      <SideBar />
      <Main />
      <Profile />
    </div>
  )
}

export default Dashboard;
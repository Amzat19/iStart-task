import { ReactComponent as Menu } from '../assets/menu.svg';
import { ReactComponent as Search } from '../assets/search-normal.svg';
import { ReactComponent as Notification } from '../assets/notification.svg';
import { ReactComponent as Moon } from '../assets/moon.svg';
import { ReactComponent as Profile } from '../assets/profile.svg';
import '../styles/Dashboard.css';
import { useDarkMode } from '../utils/useDarkMode';
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router';

const Dashboard = () => {
  const { toggleTheme } = useDarkMode();
  const [activeSidebar, setActiveSidebar] = useState(false);
  const { fullname } = JSON.parse(localStorage.getItem('user'));
  const today = new Date();
  const currentHour = today.getHours();
  let greeting;

  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Good Morning';
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Evening';
  }

  const toggleSidebar = () => {
    setActiveSidebar(!activeSidebar)
  };

  return (
    <div className='dashboard'>
      <Sidebar activeSidebar={activeSidebar} toggleSidebar={toggleSidebar} />
      <main>
        <header className='header'>
          <div className='menu'>
            <Menu className='menu-logo' onClick={() => toggleSidebar()} />
            <p>{greeting}, {fullname}</p>
          </div>
          <div className='icon-box'>
            <Search />
            <Notification />
            <Moon onClick={() => toggleTheme()} />
            <Profile />
          </div>
        </header>
        <Outlet />
      </main>
    </div>
  )
}

export default Dashboard;
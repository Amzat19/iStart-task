import { ReactComponent as Calendar } from '../assets/calendar.svg';
import { ReactComponent as Add } from '../assets/add.svg';
import { ReactComponent as Note } from '../assets/note.svg';
import { ReactComponent as Overview } from '../assets/overview.svg';
import { ReactComponent as Today } from '../assets/today.svg';
import { ReactComponent as Projects } from '../assets/projects.svg';
import { ReactComponent as Team } from '../assets/team.svg';
import { ReactComponent as Down } from '../assets/down.svg';
import { ReactComponent as Close } from '../assets/close-logo.svg';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Sidebar = ({ activeSidebar, toggleSidebar }) => {
    // State to keep track of the active page in the sidebar
    const [activePage, setActivePage] = useState('overview');

    // Hook to navigate to different routes
    const navigate = useNavigate();

    // Function to change the active page in the sidebar
    const changeActivePage = (page) => {
        // Update the activePage state
        setActivePage(page);

        // Navigate to the selected page route
        if (page === 'overview') {
            navigate(`${page}`);
        } else {
            navigate(`construction`);
        }
    };

    return (
        <aside className={activeSidebar ? 'aside-active' : ''}>
            <div className='head'>
                <h2>Brand logo</h2>
                <Close className="close" onClick={() => toggleSidebar()} />
            </div>
            <button>
                <Add />
                Add New Task
            </button>
            <div className='menu-nav'>
                <h3>MENU</h3>
                <nav>
                    <ul>
                        <li className={activePage === 'overview' ? 'list-active' : null} onClick={() => changeActivePage('overview')}>
                            <Overview />
                            Overview
                        </li>
                        <li className={activePage === 'today' ? 'list-active' : null} onClick={() => changeActivePage('today')}>
                            <Today />
                            Today
                        </li>
                        <li className={activePage === 'schedule' ? 'list-active' : null} onClick={() => changeActivePage('schedule')}>
                            <Calendar />
                            Schedule
                        </li>
                        <li className={activePage === 'note' ? 'list-active' : null} onClick={() => changeActivePage('note')}>
                            <Note />
                            Note
                        </li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                        <li className={activePage === 'projects' ? 'list-active' : null} onClick={() => changeActivePage('projects')}>
                            <div>
                                <Projects />
                                Projects
                            </div>
                            <Down />
                        </li>
                        <li className={activePage === 'team' ? 'list-active' : null} onClick={() => changeActivePage('team')}>
                            <div>
                                <Team />
                                Team
                            </div>
                            <Down />
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

Sidebar.propTypes = {
    activeSidebar: PropTypes.bool,
    toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
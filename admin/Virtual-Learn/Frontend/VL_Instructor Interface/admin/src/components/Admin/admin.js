import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../../CSS/dashboard.css';
import AddCourses from './addCourses';
import Dashboard from './dashboard';
import Studentlist from './studentList';
import Settings from './Settings';
import CardProfile from './Profile';

function Admin() {
  const [data, setData] = useState('');
  const [student, setStudent] = useState('');

  const [studentdata, setStudentData] = useState('');

  const [isActive, setActive] = useState(null);
  const [isActiveSidebar, setActiveSidebar] = useState(null);
  const toggleClass = () => {
    setActive(!isActive);
  };

  const toggleClassSidebar = () => {
    setActiveSidebar(!isActiveSidebar);
  };

  const dashboardtoAdmin = (student) => {
    setStudentData(student);
  };

  const childToParent2 = (childdata) => {
    setStudent(childdata);
  };

  const parentToChild = () => {
    setData(studentdata);
  };

  useEffect(() => {
    parentToChild();
  }, [parentToChild]);

  return (
    <div className="dashboard">
      <div className="dashboard-sidebar">
        <div className="dashboard-topbar-profile" onClick={toggleClass}>
          <div className="dashboard-topbar-profileImg">
            <img
              src={require('../../images/Screenshot 2022-05-16 104609.png')}
              alt="Virtual Learn Logo"
            />
          </div>
          <div className="dashboard-topbar-profileName">Manjay Guptha</div>
        </div>
        <div>
          <img
            src={require('../../images/VL logo.png')}
            className="dashboard-sidebar-logo"
            alt="Virtual Learn Logo"
          />

          <Tabs>
            <TabList className="dashboard-sidebarContents-tab">
              <div className="dashboard-sidebarContents">
                <Tab className="dashboard-tabs">
                  <div>
                    <img
                      src={require('../../images/icons/dashboard_black_24dp 1.png')}
                      alt="icon"
                      className="dashboard-dashboardIcon"
                    />
                    {/*dashboard-tabs react-tabs__tab--selected*/}
                    <div>Dashboard</div>
                  </div>
                </Tab>
                <Tab className="dashboard-tabs">
                  <div>
                    <img
                      src={require('../../images/icons/add video.png')}
                      alt="icon"
                      className="dashboard-addVideoIcon"
                    />
                    {/*dashboard-tabs react-tabs__tab--selected*/}
                    <div>Add Courses</div>
                  </div>
                </Tab>

                <Tab className="dashboard-tabs" id="dashboard-tab">
                  <div>
                    <img
                      src={require('../../images/icons/list.png')}
                      alt="icon"
                      className="dashboard-listIcon"
                    />
                    {/*dashboard-tabs react-tabs__tab--selected*/}
                    <div> Student List</div>
                  </div>
                </Tab>
                <Tab className="dashboard-tabs" id="dashboard-tab">
                  <div>
                    <img
                      src={require('../../images/icons/settings.png')}
                      alt="icon"
                      className="dashboard-SettingsIcon"
                    />

                    <div> Settings</div>
                  </div>
                </Tab>
              </div>
            </TabList>

            <TabPanel>
              <Dashboard
                name="Dashboard"
                childToParent2={childToParent2}
                dashboardtoAdmin={dashboardtoAdmin}
              />
            </TabPanel>
            <TabPanel>
              <AddCourses name="Add Courses" />
            </TabPanel>
            <TabPanel>
              <Studentlist parentToChild={data} />
            </TabPanel>
            <TabPanel>
              <Settings />
            </TabPanel>
          </Tabs>
        </div>
      </div>

      <aside
        className={isActive ? 'sidebar show-sidebar' : 'sidebar'}
        id="sidebar"
        onClick={toggleClass}
      >
        <div>
          <div className="ProfileContents" onClick={(e) => e.stopPropagation()}>
            <button
              id="close-btn"
              className={isActive ? 'close-btn' : 'close-btn'}
              onClick={toggleClass}
            >
              <svg
                width={26}
                height={26}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.743 5.257a.61.61 0 010 .861L6.118 20.743a.61.61 0 11-.861-.861L19.882 5.257a.61.61 0 01.861 0z"
                  fill="#fff"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.257 5.257a.61.61 0 01.861 0l14.625 14.625a.61.61 0 11-.861.861L5.257 6.118a.61.61 0 010-.861z"
                  fill="#fff"
                />
              </svg>
            </button>
            <div className="ProfileContents">
              <CardProfile />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Admin;

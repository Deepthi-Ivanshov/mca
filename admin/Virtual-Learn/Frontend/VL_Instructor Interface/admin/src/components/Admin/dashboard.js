import React, { useState, useEffect } from 'react';
import API from './API';
import RecentCourses from './RecentCourses';

const Dashboard = ({ childToParent2, dashboardtoAdmin }) => {
  const [viewCourse, setViewCourse] = useState('');
  const [course, setcourse] = useState();

  const [student, setStudent] = useState('');

  const childToParent3 = (childdata) => {
    setStudent(childdata);
  };

  const data = course;
  const childToParent = (childdata, course) => {
    setViewCourse(childdata);
    setViewCourse(true);
    setcourse(course);
  };

  const RecentCoursestoggle = (RecentToggle) => {
    setViewCourse(RecentToggle);
    setViewCourse(false);
  };

  useEffect(() => {
    childToParent2(data);
  });

  useEffect(() => {
    dashboardtoAdmin(student);
  }, [student]);

  return (
    <div>
      <div className="dashboard-scroll">
        {viewCourse ? (
          <RecentCourses
            RecentCoursestoggle={RecentCoursestoggle}
            courses={course}
          />
        ) : (
          <API childToParent={childToParent} childToParent3={childToParent3} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;

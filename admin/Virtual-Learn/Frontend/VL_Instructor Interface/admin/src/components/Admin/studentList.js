import React from 'react';
import '../../CSS/dashboard.css';

import ToggleSwitchStudent from '../Misc/ToggleSwitchStudent';

function Studentlist({ parentToChild }) {
  return (
    <div>
      {' '}
      <div className="dashboard-topbar">
        <div className="dashboard-topbar-title">Students List</div>
      </div>
      <div className="background">
        <div className=" studentList-viewall">
          <table className="studentlist-table">
            <thead className="table-head">
              <tr>
                <th>{''}</th>
                <th>Name</th>
                <th>Joined Date</th>
                <th>Course Title</th>
                <th>Completed Date</th>
                <th>Status</th>
                <th>Subscribe</th>
              </tr>
            </thead>
            <tbody>
              {parentToChild &&
                parentToChild.length > 1 &&
                parentToChild.map(function (student) {
                  return (
                    <tr key={student.id}>
                      <td className="table-bullet">{'\u25EF'}</td>
                      <td>
                        <div className="table-name">
                          <img
                            src={
                              student.cloudinaryUrl
                                ? student.cloudinaryUrl
                                : require('../../images/icons/default-profile-pic.png')
                            }
                            alt={student.name}
                            className="table-ProfilePic"
                          />
                          {student.fullname}
                        </div>
                      </td>
                      <td className="table-joining">{student.Joining}</td>
                      <td className="table-course">
                        {student.coursesTaken.map(function (
                          courseTitle,
                          index
                        ) {
                          return (
                            <tr className="courseNameTr">
                              {index + 1}. {courseTitle}.
                            </tr>
                          );
                        })}
                      </td>
                      <td className="table-completed ">{student.Completed}</td>
                      <td>
                        <div
                          className={
                            student.Completed
                              ? 'table-status table-status-completed'
                              : 'table-status table-status-ongoing'
                          } /*{"table-status table-status-ongoing"}*/
                        >
                          {'\u25CF'}
                          {'\u2001'}{' '}
                          {student.Completed ? 'Completed' : 'On Going'}
                        </div>
                      </td>
                      <td className="table-subscribe">
                        {<ToggleSwitchStudent label={student.name} />}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Studentlist;

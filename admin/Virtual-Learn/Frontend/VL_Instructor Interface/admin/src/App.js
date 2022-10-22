import React, { Component, useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/login';
import PasswordRecovery from './components/login/passwordRecovery';
import NewPassword from './components/login/newPassword';
import Verification from './components/login/verification';
import Admin from './components/Admin/admin';
import Protected from './components/login/Protected';

const App = () => {
  const [data, setData] = useState();
  const childToParent = (childdata) => {
    setData(childdata);
  };

  console.log('data', data);

  return (
    <div>
      <React.Fragment>
        <Router>
          <Routes>
            <Route
              exact
              path="/login"
              element={<Login childToParent={childToParent} />}
            />
            <Route
              exact
              path="/"
              element={<Protected Component={Admin} data={data} />}
            />
            <Route
              exact
              path="password"
              element={<PasswordRecovery Component={Verification} />}
            />

            <Route exact path="newPassword" element={<NewPassword />} />
            <Route
              exact
              path="*"
              element={<Login childToParent={childToParent} />}
            />
            <Route exact path="/fake" element={<Admin />} />
          </Routes>
        </Router>
      </React.Fragment>
    </div>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../../CSS/addCourse.css';
import '../../CSS/Settings.css';

function Settings() {
  const [passwordError, setPasswordErr] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [passwordInput, setPasswordInput] = useState({
    NewPassword: '',
    ConfirmPassword: '',
  });

  function passwordSubmitHandler(e) {
    e.preventDefault();
  }

  function passwordChangeHandler(e) {
    console.log('password', e.target.value);

    const passwordInputValue = e.target.value.trim();
    const passwordInputFieldName = e.target.name;
    const NewPasswordInput = {
      ...passwordInput,
      [passwordInputFieldName]: passwordInputValue,
    };
    setPasswordInput(NewPasswordInput);

    PasswordValidation();

  }
  function PasswordValidation() {
    console.log('namste', passwordInput.NewPassword);
    const uppercaseRegExp = /(?=.*?[A-Z])/;
    const lowercaseRegExp = /(?=.*?[a-z])/;
    const digitsRegExp = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    const minLengthRegExp = /.{8,}/;

    const uppercasePassword = uppercaseRegExp.test(passwordInput.NewPassword);
    const lowercasePassword = lowercaseRegExp.test(passwordInput.NewPassword);
    const digitsPassword = digitsRegExp.test(passwordInput.NewPassword);
    const specialCharPassword = specialCharRegExp.test(
      passwordInput.NewPassword
    );
    const minLengthPassword = minLengthRegExp.test(passwordInput.NewPassword);

    console.log('uppercasePassword', uppercasePassword);
    console.log('lowercasePassword', lowercasePassword);
    console.log('digitsPassword', digitsPassword);
    console.log('specialCharPassword', specialCharPassword);
    console.log('minLengthPassword', minLengthPassword);

    let errMsg = '';
    if (!uppercasePassword) {
      errMsg = 'At least one Uppercase';
    } else if (!lowercasePassword) {
      errMsg = 'At least one Lowercase';
    } else if (!digitsPassword) {
      errMsg = 'At least one digit';
    } else if (!specialCharPassword) {
      errMsg = 'At least one Special Characters';
    } else if (!minLengthPassword) {
      errMsg = 'At least minumum 8 characters';
    } else {
      errMsg = '';
    }
    setPasswordErr(errMsg);

    if (
      passwordInput.ConfirmPassword.length > 0 &&
      passwordInput.NewPassword.length > 7
    ) {
      if (passwordInput.ConfirmPassword !== passwordInput.NewPassword) {
        setConfirmPasswordError('Passwords are not matched');
      } else {
        setConfirmPasswordError('');
      }
    }
  }
  useEffect(() => {});

  useEffect(() => {
    console.log('newww', passwordInput, passwordError, confirmPasswordError);
  });

  return (
    <div>
      {' '}
      <div className="dashboard-topbar">
        <div className="dashboard-topbar-title">Settings</div>
      </div>
      <div className="background">
        <div className="Settings">
          <div className="addCourses-container">
            <Tabs>
              <TabList>
                <Tab>Change Password</Tab>
              </TabList>
              <TabPanel>
                <div className="ChangePassword">
                  <form onSubmit={passwordSubmitHandler}>
                    <div className="ChangePasswordFields">
                      <div className="updatePassword">
                        <label>Current Password </label>
                        <input
                          type="password"
                          name="CurrentPassword"
                          onChange={passwordChangeHandler}
                          placeholder="Enter Old Password"
                        ></input>
                      </div>
                      <div className="updatePassword">
                        <label>New Password </label>
                        <input
                          type="password"
                          name="NewPassword"
                          placeholder="Enter New Password"
                          onChange={passwordChangeHandler}
                        ></input>
                        <div className="passwordErr-warning">
                          {passwordError ? (
                            <div>
                              {' '}
                              <svg
                                width={16}
                                height={16}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8 14.667A6.667 6.667 0 118 1.334a6.667 6.667 0 010 13.333zM7.333 10v1.333h1.334V10H7.333zm0-5.333v4h1.334v-4H7.333z"
                                  fill="#EF8943"
                                />
                              </svg>
                              {passwordError}
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                      <div className="updatePassword">
                        <label>Confirm Password</label>
                        <input
                          type="password"
                          name="ConfirmPassword"
                          placeholder="Confirm New Password"
                          onChange={passwordChangeHandler}
                        ></input>
                        {confirmPasswordError ? (
                          <div className="confirmPassword-error">
                            <svg
                              width={16}
                              height={16}
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8 14.667A6.667 6.667 0 118 1.334a6.667 6.667 0 010 13.333zM7.333 10v1.333h1.334V10H7.333zm0-5.333v4h1.334v-4H7.333z"
                                fill="#C83532"
                              />
                            </svg>
                            {confirmPasswordError}
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                      <input
                        type="submit"
                        className="saveButton saveButtonPasswordChange "
                        value="save"
                      ></input>
                    </div>
                  </form>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;

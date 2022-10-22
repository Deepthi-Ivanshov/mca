import React, { useState } from 'react';
import './ToggleSwitch.css';

const ToggleSwitchStudent = ({ label }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [answer, setAnswer] = useState({});

  const onToggle = () => {
    setIsToggled(!isToggled);
    setAnswer({ label: label });
  };

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
};

export default ToggleSwitchStudent;

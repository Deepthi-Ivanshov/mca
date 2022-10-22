import React, { useEffect, useState } from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ label, index, childToParent }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [answer, setAnswer] = useState({});

  const onToggle = () => {
    setIsToggled(!isToggled);
    setAnswer({ question: index + 1, option: label });
    console.log(label);
  };

  useEffect(() => {
    if (isToggled) {
      childToParent(answer);
    }
  }, [isToggled]);

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={isToggled}
        onChange={onToggle}
        label={label}
      />
      <span className="switch" />
    </label>
  );
};

export default ToggleSwitch;

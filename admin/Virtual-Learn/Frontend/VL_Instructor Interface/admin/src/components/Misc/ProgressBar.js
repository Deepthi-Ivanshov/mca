import React from 'react';
import '../../CSS/addCourse.css';
const ProgressBar = ({ progress }) => {
  const Parentdiv = {
    height: '3px',
    width: '100%',
    backgroundColor: '#DFDFDF',
    borderRadius: 40,
  };

  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: '#EE5C4D',
    borderRadius: 40,
    textAlign: 'right',
  };

  const progresstext = {
    padding: 0,
    color: 'black',
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext} className="progress-balloon">
          <div className="progress-balloon-background">
            <svg
              width={39}
              height={44}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x={1}
                y={38}
                width={37}
                height={37}
                rx={3}
                transform="rotate(-90 1 38)"
                fill="#EE5C4D"
              />
              <rect
                x={1}
                y={38}
                width={37}
                height={37}
                rx={3}
                transform="rotate(-90 1 38)"
                stroke="#EE5C4D"
                strokeWidth={2}
              />
              <path
                d="M19.657 42.071l-3.002-3h6.003l-3.001 3z"
                stroke="#EE5C4D"
                strokeWidth={2.2}
              />
              <path
                d="M19.657 41.313L14 35.657h11.314l-5.657 5.657z"
                fill="#EE5C4D"
              />
            </svg>
          </div>
          <div className="progress-balloon-value">{`${progress}%`} </div>
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;

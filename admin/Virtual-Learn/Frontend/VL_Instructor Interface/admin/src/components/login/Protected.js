import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Protected(props) {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let login = props.data;

    if (!login) {
      navigate('/login');
    }
  });

  return (
    <div>
      <Component />
    </div>
  );
}

export default Protected;

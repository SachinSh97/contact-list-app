import React from 'react';
import './Avatar.scss';

const Avatar = ({ name, color }) => {
  const renderText = (name) => {
    const nameArr = name?.split(' ');
    let text = '';

    nameArr?.length > 0 &&
      nameArr.forEach((name) => {
        text += name?.charAt(0);
      });

    return text;
  };

  return (
    <div className="avatar" style={{ '--bg-color': color }}>
      {renderText(name)}
    </div>
  );
};

export default Avatar;

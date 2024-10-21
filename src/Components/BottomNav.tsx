import React, { useState } from 'react';
import blog from '../assests/icons/blog.svg';
import blogLight from '../assests/icons/blogLight.svg';
import calenderLight from '../assests/icons/calenderLight.svg';
import home from '../assests/icons/home.svg';
import homeLight from '../assests/icons/homeLight.svg';
import notification from '../assests/icons/notification.svg';
import calender from '../assests/icons/today.svg';
import user from '../assests/icons/user.svg';

import notificationLight from '../assests/icons/notificationLight.svg';
import userLight from '../assests/icons/userLight.svg';

import './BottomNav.scss';

export const BottomNav = () => {
  const [active, setActive] = useState(2);

  return (
    <div className="bottom-nav">
      <div className={`nav-item ${active === 0 ? 'active' : ''}`} onClick={() => setActive(0)}>
        <i className="icon"><img src={active === 0 ?blogLight:blog}></img></i>
      </div>
      <div className={`nav-item ${active === 1 ? 'active' : ''}`} onClick={() => setActive(1)}>
        <i className="icon"><img src={active === 1 ? calenderLight : calender}></img></i>
      </div>
      <div className={`nav-item ${active === 2 ? 'active' : ''}`} onClick={() => setActive(2)}>
        <i className="icon"><img src={active === 2 ? homeLight : home}></img></i>
      </div>
      <div className={`nav-item ${active === 3 ? 'active' : ''}`} onClick={() => setActive(3)}>
        <i className="icon"><img src={active === 3 ? notificationLight : notification}></img></i>
      </div>
      <div className={`nav-item ${active === 4 ? 'active' : ''}`} onClick={() => setActive(4)}>
        <i className="icon"><img src={active === 4 ? userLight : user}></img></i>
      </div>
    </div>
  );
};


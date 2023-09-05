import React, { useState } from 'react';
import '../MyPage.css';

const NavigationBar = () => {
  const [activeTab, setActiveTab] = useState('saved'); // 기본적으로 'saved' 탭을 선택

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="navigation-bar">
      <div
        className={`nav-item ${activeTab === 'saved' ? 'active' : ''}`}
        onClick={() => handleTabClick('saved')}
      >
        저장한 클립
      </div>
      <div
        className={`nav-item ${activeTab === 'viewed' ? 'active' : ''}`}
        onClick={() => handleTabClick('viewed')}
      >
        살 펴본 클립
      </div>
    </div>
  );
};

export default NavigationBar;

import React from 'react';

import Header from '../../components/Header/';
import LeftMenu from '../../components/LeftMenu/';

import "./styles.css";

export default function BasePage({ leftMenu = true, children }) {
  return (
    <div className="layout">
      <div className="header">
        <Header />
      </div>
      {leftMenu && (
        <div className="left-menu">
          <LeftMenu />
        </div>
      )}
      <div className="content">
        {children}
      </div>
    </div>
  );
}

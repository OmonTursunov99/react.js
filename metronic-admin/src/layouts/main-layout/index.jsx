import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import Sidebar from "@/components/layouts/sidebar/index.jsx";
import Header from "@/components/layouts/header/index.jsx";
import { routes } from "@/app/routes.jsx";
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import "./index.scss";

const MainLayout = () => {
  const location = useLocation()
  const currentOutlet = useOutlet()
  const { nodeRef } = routes.find(item => item.path === "/").children.find(route => route.path === location.pathname) ?? {};
  
  
  return (
    <div className="main-layout">
      <Sidebar/>
      <div className="main-layout__context">
        <Header />
        <main className="main-layout__main">
          <SwitchTransition>
            <CSSTransition
              key={ location.key }
              nodeRef={ nodeRef }
              timeout={ 300 }
              classNames="animation-page"
              unmountOnExit
            >
              { (state) => (
                <div ref={ nodeRef } className="main-layout__outlet">
                  { currentOutlet }
                </div>
              ) }
            </CSSTransition>
          </SwitchTransition>
        </main>
        <footer>Main Footer</footer>
      </div>
    </div>
  );
};

export default MainLayout;

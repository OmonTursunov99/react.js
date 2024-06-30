import React, { useEffect, useMemo, useState } from "react";
import "./index.scss";
import { Link, useLocation } from 'react-router-dom';
import { routes } from "@/data/routes.js";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  
  const [ activeMenu, setActiveMenu ] = useState(null);
  
  const handlerMenu = id => {
    if (activeMenu === id) {
      setActiveMenu(null);
    } else {
      setActiveMenu(id);
    }
  };
  const resultHasChildren = child => {
    const isOpen = activeMenu === child.id;
    const styleAttr = {
      height: 0,
    };
    
    if (isOpen) {
      styleAttr.height = `${ 36.5 * child.children.length }px`;
    }
    return {
      hasChildren: true,
      id: child.id,
      name: child.name,
      icon: child.icon,
      href: null,
      classAttr: isOpen
        ? "layout-sidebar-body-item-accordion layout-sidebar-body-item-accordion-active"
        : "layout-sidebar-body-item-accordion"
      ,
      isOpen,
      styleAttr,
      children: child.children.map(item => {
        return {
          id: item.id,
          name: item.name,
          href: item.href,
          isActive: item.id === location.pathname,
          classAttr: item.id === location.pathname ? "layout-sidebar-body-item-accordion-body-link-active" : "",
        };
      }),
    };
  };
  const resultNotChildren = child => {
    return {
      hasChildren: false,
      id: child.id,
      name: child.name,
      icon: child.icon,
      href: child.href,
      isActive: child.id === location.pathname,
      classAttr: child.id === location.pathname
        ? "layout-sidebar-body-item-link layout-sidebar-body-item-link-active"
        : "layout-sidebar-body-item-link"
      ,
    };
  };
  const searchActiveMenu = () => {
    for (const items of routes) {
      if (items.children) {
        const onlyHasChildren = items.children.filter(item => item.children);
        
        for (const child of onlyHasChildren) {
          for (const route of child.children) {
            if (route.id === location.pathname) {
              setActiveMenu(child.id);
              break;
            }
          }
        }
      }
    }
  };
  
  const mapRoutes = useMemo(
    () => {
      return routes.map(route => {
        const children = route.children.map(child => {
          if (child.children) {
            return resultHasChildren(child);
          }
          return resultNotChildren(child);
        });
        
        return {
          id: route.id,
          heading: route.heading,
          children,
        };
      });
    },
    [ routes, activeMenu, location ],
  );
  
  useEffect(() => {
    searchActiveMenu();
  }, []);
  
  return (
    <aside className="layout-sidebar">
      <div className="layout-sidebar-head">
        <Link to="/">
          <img src="/assets/images/react.png" alt=""/>
          <p>React admin</p>
        </Link>
      </div>
      <div className="layout-sidebar-body">
        { mapRoutes.map(route => (
          <div className="layout-sidebar-body-item" key={ route.id }>
            <small>{ t(route.heading) }</small>
            <ul>
              { route.children.map(item => (
                <li key={ item.id }>
                  {
                    item.hasChildren &&
                    <div className={ item.classAttr }>
                      <button type="button" onClick={ () => handlerMenu(item.id) }>
                        <div className="material-symbols-outlined material-main">{ item.icon }</div>
                        <p>{ t(item.name) }</p>
                        <div className="material-symbols-outlined material-arrow">keyboard_arrow_down</div>
                      </button>
                      <div className="layout-sidebar-body-item-accordion-body" style={ item.styleAttr }>
                        { item.children.map(child => (
                          <Link to={ child.href } key={ child.id } className={ child.classAttr }>
                            <div className="material-symbols-outlined material-point">radio_button_unchecked</div>
                            <p>{ t(child.name) }</p>
                          </Link>
                        )) }
                      </div>
                    </div>
                  }
                  {
                    !item.hasChildren &&
                    <Link
                      className={ item.classAttr }
                      to={ item.href }
                      onClick={ () => handlerMenu(null) }
                    >
                      <div className="material-symbols-outlined material-main">{ item.icon }</div>
                      <p>{ t(item.name) }</p>
                    </Link>
                  }
                </li>
              )) }
            </ul>
          </div>
        )) }
      </div>
    </aside>
  );
};

export default Sidebar;
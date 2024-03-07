import React, { useState } from "react";
import "../Layout.css";
import { Link, useLocation } from "react-router-dom";

function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const userMenu = [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-line",
    },
    {
      name: "Appointments",
      path: "/appointments",
      icon: "ri-health-book-line",
    },
    {
      name: "Apply Doctor",
      path: "/apply-doctor",
      icon: "ri-hand-heart-line",
    },
    {
      name: "profile",
      path: "/profile",
      icon: "ri-user-line",
    },
    {
      name: "Logout",
      path: "/logout",
      icon: "ri-logout-circle-line",
    },
  ];

  const menuToBeRendered = userMenu;
  return (
    <div className="main p-2">
      <div className="d-flex layout">
        <div className="sidebar">
          <div className="sidebar-header">
            {/* my logo need to add later*/}
            <h1>WN</h1>
          </div>
          <div className="menu">
            {menuToBeRendered.map((menu) => {
              const isActive = location.pathname === menu.path;
              return (
                <div
                  className={`d-flex menu-item ${
                    isActive && "active-menu-item"
                  }`}
                >
                  <i className={menu.icon}></i>
                  {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                </div>
              );
            })}
          </div>
        </div>
        <div className="content">
          <div className="header">
            {collapsed ? (
              <i
                class="ri-menu-2-line header-action-icons"
                onClick={() => setCollapsed(false)}
              ></i>
            ) : (
              <i
                class="ri-close-line header-action-icons"
                onClick={() => setCollapsed(true)}
              ></i>
            )}
            {/* <div className="d-flex">
            <i class="ri-notification-2-line"></i>
            </div> */}
          </div>
          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;

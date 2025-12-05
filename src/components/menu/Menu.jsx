import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./styles.css";
import Hamburger from "hamburger-react";
export default function Menu() {
  const [active, setActive] = useState(false);
  const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Periodismo", path: "/periodismo" },
    { name: "Historia", path: "/historia" },
    { name: "Fotografía", path: "/fotografia" },
    { name: "Audiovisual", path: "/audiovisual" },
  ];

  return (
    <div className="navMenu">
      <nav className="desktopMenu" aria-label="Main navigation">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mobileMenu">
        <Hamburger
          toggled={active}
          toggle={setActive}
          size={24}
          color="#593119"
          label="Show menu"
        />
      </div>

      <div className={`mobileHeader ${active ? "open" : "closed"}`}>
        <nav className="mobileMenuItems" aria-label="Mobile navigation">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setActive(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

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
  ];
  const onClick = () => {
    setActive(!active);
  };
  return (
    <div className="navMenu">
      <nav className="desktopMenu">
        <ul>
          {menuItems.map((item, index) => {
            return (
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
            );
          })}
        </ul>
      </nav>
      <button onClick={onClick}>
        <div className="mobileMenu">
          <Hamburger toggled={active} toggle={setActive} size={20} />
        </div>
      </button>

      <div className={`mobileHeader ${active ? "open" : "closed"}`}>
        <div className="mobileMenuItems">
          <ul>
            {menuItems.map((item, index) => {
              return (
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
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

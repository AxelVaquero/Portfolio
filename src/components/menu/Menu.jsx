import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./styles.css";
import Hamburger from "hamburger-react";
export default function Menu() {
  const [active, setActive] = useState(false);
  const menuItems = [
    { name: "Inicio", path: "/Portfolio/" },
    { name: "Periodismo", path: "/Portfolio/periodismo" },
    { name: "Historia", path: "/Portfolio/historia" },
    { name: "Fotografía", path: "/Portfolio/fotografia" },
    { name: "Audiovisual", path: "/Portfolio/audiovisual" },
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

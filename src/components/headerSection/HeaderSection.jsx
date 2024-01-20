import PropTypes from "prop-types";
import "./headerSection.css";

export default function HeaderSection({ backgroundColor, title, icon, style }) {
  return (
    <div className="wrapper" style={{ ...style, backgroundColor }}>
      <div className="header">
        <span>{icon}</span>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

HeaderSection.propTypes = {
  backgroundColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  icon: PropTypes.element,
  style: PropTypes.object,
};

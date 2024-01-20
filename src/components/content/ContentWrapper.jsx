import PropTypes from "prop-types";
import "./ContentWrapper.css";

export default function ContentWrapper({ children }) {
  return (
    <div className="bodyWrapper">
      <div className="contentWrapper">{children}</div>
    </div>
  );
}

ContentWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

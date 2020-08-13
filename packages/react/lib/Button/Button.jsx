import React from "react";
import PropTypes from "prop-types";

export const Button = (props) => {
  const { children } = props;
  const [clickCount, setClickCount] = React.useState(0);

  return (
    <button onClick={() => setClickCount(clickCount + 1)}>
      {children}: {clickCount}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
};

Button.defaultProps = {
  children: "hello",
};

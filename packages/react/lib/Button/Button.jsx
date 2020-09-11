import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "@rehoboam/styles"

export const Button = (props) => {
  const { children } = props;
  const [clickCount, setClickCount] = React.useState(0);

  const click = async () => {
    setClickCount(clickCount + 1);
  };

  return (
    <button className={classnames(styles.btn)} onClick={click}>
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

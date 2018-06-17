import React from 'react';
import styles from 'components/Global/button.css';
import PropTypes from 'prop-types';

export const options = {
  white: 'white',
  yellow: 'yellow',
  purple: 'purple',
  whiteYellow: 'white-yellow',
  disabled: 'disabled',
};

const getStyle = (color) => {
  const styleColor = options[color];
  return styles[styleColor];
};

export const setDimensions = (height, width) => ({
  height: `${height}px`,
  width: `${width}px`,
});

const Button = ({
  text,
  color,
  height,
  width,
  onClick,
}) => (
  <div>
    <div
      className={getStyle(color)}
      style={setDimensions(height, width)}
      onKeyDown={() => {}}
      role="presentation"
      onClick={onClick}
    >
      <p>{text}</p>
    </div>
  </div>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  height: '50',
  width: '200',
  onClick: () => ({}),
};

export default Button;

import React from 'react';
import styles from 'components/Global/linkButton.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const option = {
  white: 'white',
  yellow: 'yellow',
  purple: 'purple',
};

const getStyle = (color) => {
  const styleColor = option[color];
  return styles[styleColor];
};

const setDimensions = (height, width) => ({
  minHeight: `${height}px`,
  minWidth: `${width}px`,
});

const LinkButton = ({
  text,
  link,
  color,
  height = '50',
  width = '200',
}) => (
  <div className={getStyle(color)} style={setDimensions(height, width)}>
    <Link to={link}>
      <p>{text}</p>
    </Link>
  </div>
);

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default LinkButton;

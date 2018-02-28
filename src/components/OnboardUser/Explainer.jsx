import React from 'react';
import PropTypes from 'prop-types';
import StepA from 'assets/img/onboarding/stepA.png';
import StepB from 'assets/img/onboarding/stepB.png';
import StepC from 'assets/img/onboarding/stepC.png';
import styles from 'components/OnboardUser/index.css';

const setDimensions = (height, width) => ({
  height: `${height}px`,
  width: `${width}px`,
});

const logoImage = (image, alt, width, height) => (
  <img src={image} alt={alt} style={setDimensions(width, height)} />
);

const image = {
  A(width, height) {
    return logoImage(StepA, 'Step A', width, height);
  },
  B(width, height) {
    return logoImage(StepB, 'Step B', width, height);
  },
  C(width, height) {
    return logoImage(StepC, 'Step C', width, height);
  },
};

const Explainer = ({
  option,
  title,
  body,
  width,
  height,
}) => (
  <div className={styles.explainerWrapper}>
    {image[option](width, height)}
    <p className={styles.titleText}>{title}</p>
    <p className={styles.bodyText}>{body}</p>
  </div>
);

Explainer.propTypes = {
  option: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

Explainer.defaultProps = {
  width: '250',
  height: '',
};

export default Explainer;

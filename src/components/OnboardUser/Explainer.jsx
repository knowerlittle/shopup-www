import React from 'react';
import PropTypes from 'prop-types';
import StepA from 'assets/img/onboarding/stepA.png';
import StepB from 'assets/img/onboarding/stepB.png';
import StepC from 'assets/img/onboarding/stepC.png';
import styles from 'components/OnboardUser/index.css';

const logoImage = (image, alt) => (
  <img src={image} alt={alt} />
);

const image = {
  A: logoImage(StepA, 'Step A'),
  B: logoImage(StepB, 'Step B'),
  C: logoImage(StepC, 'Step C'),
};

const Explainer = ({ option, title, body }) => (
  <div className={styles.explainerWrapper}>
    {image[option]}
    <p className={styles.titleText}>{title}</p>
    <p className={styles.bodyText}>{body}</p>
  </div>
);

Explainer.propTypes = {
  option: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Explainer;

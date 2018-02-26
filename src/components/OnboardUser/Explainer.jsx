import React from 'react';
import StepA from 'assets/img/onboarding/stepA.png';
import StepB from 'assets/img/onboarding/stepB.png';
import StepC from 'assets/img/onboarding/stepC.png';
import styles from 'components/OnboardUser/index.css';
import PropTypes from 'prop-types';

// const title = 'Title for the Explainer';
// const body = `Explainer body blah blah blah
//   More info going on here, hopefully no longer
//   than 3 lines`;

const logoImage = (image, alt) => (
  <img src={image} alt={alt} />
);

const step = {
  A: logoImage(StepA, 'Step A'),
  B: logoImage(StepB, 'Step B'),
  C: logoImage(StepC, 'Step C'),
};

const Explainer = ({ letter, title, body }) => (
  <div className={styles.explainerWrapper}>
    {step[letter]}
    <p className={styles.titleText}>{title}</p>
    <p className={styles.bodyText}>{body}</p>
  </div>
);

Explainer.propTypes = {
  letter: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Explainer;

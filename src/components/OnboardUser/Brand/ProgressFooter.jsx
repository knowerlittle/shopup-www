import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styles from 'components/OnboardUser/index.css';

const stepA = 'Tell us about yourself';
const stepB = 'Best people for your brand';
const stepC = 'Upload your media';

const A_COMPLETE = 1;
const B_COMPLETE = 5;
const C_COMPLETE = 6;

const determineProgress = (step, requiredCompletedStep) => (step >= requiredCompletedStep ?
  styles.progressCircleFilled :
  styles.progressCircleEmpty
);

const ProgressFooter = ({ match: { params: { step } } }) => (
  <div className={styles.onboardFooter}>
    <div className={styles.progressWrapper}>
      <div className={determineProgress(step, A_COMPLETE)}>A</div>
      <div className={styles.progressLine} />
      <div className={determineProgress(step, B_COMPLETE)}>B</div>
      <div className={styles.progressLine} />
      <div className={determineProgress(step, C_COMPLETE)}>C</div>
    </div>
    <div className={styles.progressWrapper}>
      <p>{stepA}</p>
      <p className={styles.centerProgressText}>{stepB}</p>
      <p>{stepC}</p>
    </div>
  </div>
);

ProgressFooter.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      step: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

export default withRouter(ProgressFooter);

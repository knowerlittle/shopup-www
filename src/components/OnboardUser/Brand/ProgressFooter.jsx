import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styles from 'components/OnboardUser/index.css';

const stepA = 'Tell us about yourself';
const stepB = 'Best people for your space';
const stepC = 'Book 360 appointment';

const A_COMPLETE = 4;
const B_COMPLETE = 6;
const C_COMPLETE = 8;

const determineProgress = (step, requiredCompletedStep) => (step > requiredCompletedStep ?
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
  match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withRouter(ProgressFooter);

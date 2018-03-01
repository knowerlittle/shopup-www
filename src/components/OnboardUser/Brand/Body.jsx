import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Step1 from 'components/OnboardUser/Brand/Step1';
import Step2 from 'components/OnboardUser/Brand/Step2';
import Step3 from 'components/OnboardUser/Brand/Step3';
import styles from 'components/OnboardUser/index.css';

const options = {
  1: <Step1 />,
  2: <Step2 />,
  3: <Step3 />,
};

const Body = ({ match: { params: { step } } }) => (
  <div className={styles.bodyWrapper}>
    {options[step]}
  </div>
);

Body.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      step: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

export default withRouter(Body);

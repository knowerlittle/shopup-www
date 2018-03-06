import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Step1 from 'components/OnboardUser/Brand/Step1';
import Step2 from 'components/OnboardUser/Brand/Step2';
import Step3 from 'components/OnboardUser/Brand/Step3';
import Step4 from 'components/OnboardUser/Brand/Step4';
import Step5 from 'components/OnboardUser/Brand/Step5';
import Step7 from 'components/OnboardUser/Brand/Step7';
import Step6 from 'components/OnboardUser/Brand/Step6';
import SigninPanel from 'components/SocialSignin/index';
import styles from 'components/OnboardUser/index.css';

const options = {
  1: <Step1 />,
  2: <Step2 />,
  3: <Step3 />,
  4: <Step4 />,
  5: <Step5 />,
  signin: <SigninPanel />,
  6: <Step6 />,
  7: <Step7 />,
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

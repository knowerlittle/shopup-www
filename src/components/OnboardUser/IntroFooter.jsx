import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from 'components/Global/Button';
import styles from 'components/OnboardUser/index.css';

const IntroFooter = ({ hideButton }) => (
  <div className={styles.onboardFooter}>
    <h3>Itinerary builder</h3>
    <p className={styles.footerExplainer}>
      Save, organize, and share all details here
    </p>
    <div>
      { hideButton ?
          '' :
          <Link to="/onboard/brand/2">
            <Button
              color="yellow"
              text="Got it!"
              height="50"
              width="200"
            />
          </Link>
      }
    </div>
  </div>
);

IntroFooter.propTypes = {
  hideButton: PropTypes.bool,
};

IntroFooter.defaultProps = {
  hideButton: false,
};

export default IntroFooter;

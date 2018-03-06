import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from 'components/Global/Button';
import styles from 'components/OnboardUser/index.css';
import congratsCheck from 'assets/icons/congratsCheck.png';

const statement = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const Step7 = () => (
  <div className={styles.card}>
    <div className={styles.congratsWrapper}>
      <img src={congratsCheck} width="75" alt="check" />
      <h2>Congratulations</h2>
      <h3>You are ready to find your space!</h3>

      <p className={styles.congratsText}>{statement}</p>

      <div className={styles.buttonWrapperCenter}>
        <Link to="/profile/brand">
          <Button
            color="white"
            text="SEE PROFILE"
            width="150"
            onClick={() => {}}
          />
        </Link>
      </div>
    </div>
  </div>
);

export default Step7;

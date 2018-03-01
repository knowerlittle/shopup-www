import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'components/Global/Button';
import BrandExplainer from 'components/OnboardUser/Brand/BrandExplainer';
import styles from 'components/OnboardUser/index.css';
import { addDataToSignup } from 'action/signup';

const question = 'What is the name of your brand ?';

const Step2 = ({ dispatch }) => {
  let inputValue;
  return (
    <div className={styles.card}>
      <section className={styles.leftSection}>
        <BrandExplainer
          option="A"
          width="260"
          height="260"
        />
      </section>
      <section className={styles.rightSection}>
        <div className={styles.topWrapper}>
          {question}
        </div>

        <div className={styles.middleWrapper}>
          <input
            className={styles.inputBox}
            type="text"
            name="name"
            ref={(node) => { inputValue = node; }}
          />
        </div>

        <div className={styles.buttonWrapper}>
          <Button
            color="disabled"
            text="BACK"
            width="150"
            onClick={() => {}}
          />
          <Link to="/onboard/brand/3">
            <Button
              color="purple"
              text="CONTINUE"
              width="150"
              onClick={() => dispatch(addDataToSignup(inputValue))}
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

Step2.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


export default connect()(Step2);

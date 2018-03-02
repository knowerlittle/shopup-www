import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'components/Global/Button';
import BrandExplainer from 'components/OnboardUser/Brand/BrandExplainer';
import styles from 'components/OnboardUser/index.css';
import { addDataToSignup } from 'action/signup';

const question = 'What is the name of your brand?';

const Step2 = ({ dispatch, name }) => {
  let inputValue;

  return (
    <div className={styles.card}>
      <section className={styles.leftSection}>
        <BrandExplainer
          option="A"
          width="260"
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
            defaultValue={name}
            ref={(node) => { inputValue = node; }}
            // value={name.toString()}
          />
        </div>

        <div className={styles.buttonWrapper}>
          <Link to="/onboard/brand/1">
            <Button
              color="purple"
              text="BACK"
              width="150"
              onClick={() => dispatch(addDataToSignup(inputValue))}
            />
          </Link>
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
  name: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const { name } = state.signupInfo.inputValue;
  return {
    name,
  };
};

export default connect(mapStateToProps)(Step2);

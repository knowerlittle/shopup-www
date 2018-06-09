import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'components/Global/Button';
import { withRouter } from 'react-router-dom';
import BrandExplainer from 'components/OnboardUser/Brand/BrandExplainer';
import { addDataToSignup } from 'action/signup';
import styles from 'components/OnboardUser/index.css';

const question = 'Tell us more about what you do?';
let input1 = '';
let input2 = '';
let input3 = '';
let input4 = '';
const createInputStream = () => ({
  name: 'description',
  value: [input1.value, input2.value, input3.value, input4.value],
});

const Step3 = ({
  dispatch,
  inputs,
  history: { push },
}) => (
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
        <p className={styles.inputText}>
          I create
          <input
            className={styles.firstField}
            type="text"
            ref={(node) => { input1 = node; }}
            defaultValue={inputs[0]}
          />
          to
        </p>
        <p className={styles.inputText}>
          <input
            className={styles.inputField}
            type="text"
            ref={(node) => { input2 = node; }}
            defaultValue={inputs[1]}
          />
          for
        </p>
        <p className={styles.inputText}>
          <input
            className={styles.inputField}
            type="text"
            ref={(node) => { input3 = node; }}
            defaultValue={inputs[2]}
          />
          that
        </p>
        <p className={styles.inputText}>
          <input
            className={styles.lastField}
            type="text"
            ref={(node) => { input4 = node; }}
            defaultValue={inputs[3]}
          />
          .
        </p>
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          color="purple"
          text="BACK"
          width="150"
          onClick={() => {
            dispatch(addDataToSignup(createInputStream()));
            push('/onboard/brand/2');
          }}
        />
        <Button
          color="purple"
          text="CONTINUE"
          width="150"
          onClick={() => {
            dispatch(addDataToSignup(createInputStream()));
            push('/onboard/brand/4');
          }}
        />
      </div>
    </section>
  </div>
);

Step3.propTypes = {
  dispatch: PropTypes.func.isRequired,
  inputs: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

Step3.defaultProps = {
  inputs: [],
};

const mapStateToProps = (state) => {
  const inputs = state.signupInfo.inputValue.description;
  return {
    inputs,
  };
};


export default withRouter(connect(mapStateToProps)(Step3));

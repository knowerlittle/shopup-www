import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LinkButton from 'components/Global/LinkButton';
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
        <p className={styles.questionTitle}>{question}</p>
        <input
          className={styles.inputBox}
          type="text"
          name="name"
          ref={(node) => { inputValue = node; }}
        />
        <div className={styles.buttonWrapper}>
          <LinkButton
            color="disabled"
            text="BACK"
            link="/onboard/brand/2"
            width="150"
            onClick={() => {}}
          />
          <LinkButton
            color="purple"
            text="CONTINUE"
            link="/onboard/brand/3"
            width="150"
            onClick={() => dispatch(addDataToSignup(inputValue))}
          />
        </div>
      </section>
    </div>
  );
};

Step2.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


export default connect()(Step2);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LinkButton from 'components/Global/LinkButton';
import BrandExplainer from 'components/OnboardUser/Brand/BrandExplainer';
import { addDataToSignup } from 'action/signup';
import styles from 'components/OnboardUser/index.css';

const question = 'Tell us more about what you do ?';

const Step3 = ({ dispatch }) => {
  let input1;
  let input2;
  let input3;
  let input4;
  const createInputStream = () => ({
    name: 'description',
    value: `I create ${input1.value} to ${input2.value} for ${input3.value} that ${input4.value}`,
  });

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
        <div className={styles.descriptionBox}>
          <p>
            I create
            <input
              className={styles.firstField}
              type="text"
              ref={(node) => { input1 = node; }}
            />
            to
          </p>
          <p>
            <input
              className={styles.inputField}
              type="text"
              ref={(node) => { input2 = node; }}
            />
            for
          </p>
          <p>
            <input
              className={styles.inputField}
              type="text"
              ref={(node) => { input3 = node; }}
            />
            that
          </p>
          <p>
            <input
              className={styles.lastField}
              type="text"
              ref={(node) => { input4 = node; }}
            />
            .
          </p>
        </div>
        <div className={styles.buttonWrapper}>
          <Link to="/onboard/brand/2">
            <LinkButton
              color="purple"
              text="BACK"
              width="150"
              onClick={() => dispatch(addDataToSignup(createInputStream()))}
            />
          </Link>
          <Link to="/onboard/brand/4">
            <LinkButton
              color="purple"
              text="CONTINUE"
              width="150"
              onClick={() => dispatch(addDataToSignup(createInputStream()))}
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

Step3.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


export default connect()(Step3);

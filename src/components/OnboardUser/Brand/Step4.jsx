import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'components/Global/Button';
import BrandExplainer from 'components/OnboardUser/Brand/BrandExplainer';
import styles from 'components/OnboardUser/index.css';
import { addDataToSignup } from 'action/signup';
// import { getCategories } from 'reducers/signup';

const question = 'Which categories do your products fall under?';

const Step4 = ({ dispatch, categories }) => {
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
          {categories.map(({ _id: id, name }) => (
            <Button
              key={id}
              color="purple"
              text={name}
              width="150"
              onClick={() => {}}
            />
          ))}
        </div>

        <div className={styles.buttonWrapper}>
          <Link to="/onboard/brand/3">
            <Button
              color="purple"
              text="BACK"
              width="150"
              onClick={() => {}}
            />
          </Link>
          <Link to="/onboard/brand/5">
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

Step4.propTypes = {
  dispatch: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = (state) => {
  const { categories } = state.signupInfo;
  return {
    categories,
  };
};

export default connect(mapStateToProps)(Step4);

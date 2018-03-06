import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'components/Global/Button';
import BrandExplainer from 'components/OnboardUser/Brand/BrandExplainer';
import styles from 'components/OnboardUser/index.css';
import { addCategory, removeCategory } from 'action/signup';

class Step4 extends Component {
  render() {
    const { dispatch, categories, selectedCategories } = this.props;
    const question = 'Which categories do your products fall under?';
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
            <div className={styles.selectionWrapper}>
              {categories.map(({ _id: id, name }) => (
                selectedCategories.includes(id) ?
                  <Button
                    key={id}
                    color="yellow"
                    text={name}
                    width="100"
                    height="40"
                    onClick={() => {
                      dispatch(removeCategory(id));
                      this.forceUpdate();
                    }}
                  /> :
                  <Button
                    key={id}
                    color="white"
                    text={name}
                    width="100"
                    height="40"
                    onClick={() => {
                      dispatch(addCategory(id));
                      this.forceUpdate();
                    }}
                  />
              ))}
            </div>
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
                onClick={() => {}}
              />
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

Step4.propTypes = {
  dispatch: PropTypes.func.isRequired,
  categories: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  selectedCategories: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

Step4.defaultProps = {
  categories: [],
  selectedCategories: [],
};

const mapStateToProps = (state) => {
  const { categories } = state.signupInfo;
  const selectedCategories = state.signupInfo.inputValue.categories;
  return {
    categories,
    selectedCategories,
  };
};

export default connect(mapStateToProps)(Step4);

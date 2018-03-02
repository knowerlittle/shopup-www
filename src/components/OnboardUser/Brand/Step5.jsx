import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'components/Global/Button';
import BrandExplainer from 'components/OnboardUser/Brand/BrandExplainer';
import styles from 'components/OnboardUser/index.css';
import { addDemography, removeDemography } from 'action/signup';

class Step5 extends Component {
  render() {
    const { dispatch, demographics, selectedDemographics } = this.props;
    const question = 'Describe your ideal customer?';
    const nextLink = () => {
      const token = localStorage.getItem('popinToken');
      return token ?
        '/onboard/brand/6' :
        '/onboard/brand/signin';
    };
    return (
      <div className={styles.card}>
        <section className={styles.leftSection}>
          <BrandExplainer
            option="B"
            width="260"
          />
        </section>
        <section className={styles.rightSection}>
          <div className={styles.topWrapper}>
            {question}
          </div>

          <div className={styles.middleWrapper}>
            <div className={styles.selectionWrapper}>
              {demographics.map(({ _id: id, name }) => (
                selectedDemographics.includes(id) ?
                  <Button
                    key={id}
                    color="yellow"
                    text={name}
                    width="100"
                    height="40"
                    onClick={() => {
                      dispatch(removeDemography(id));
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
                      dispatch(addDemography(id));
                      this.forceUpdate();
                    }}
                  />
              ))}
            </div>
          </div>

          <div className={styles.buttonWrapper}>
            <Link to="/onboard/brand/4">
              <Button
                color="purple"
                text="BACK"
                width="150"
                onClick={() => {}}
              />
            </Link>
            <Link to={nextLink()}>
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

Step5.propTypes = {
  dispatch: PropTypes.func.isRequired,
  demographics: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  selectedDemographics: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = (state) => {
  const { demographics } = state.signupInfo;
  const selectedDemographics = state.signupInfo.inputValue.demographics;
  return {
    demographics,
    selectedDemographics,
  };
};

export default connect(mapStateToProps)(Step5);

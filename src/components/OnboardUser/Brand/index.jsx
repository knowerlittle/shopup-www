import React from 'react';
import PropTypes from 'prop-types';
import Explainer from 'components/OnboardUser/Explainer';
import styles from 'components/OnboardUser/index.css';
// import { Link } from 'react-router-dom';

const OnboardBrand = ({ step }) => (
  <div className={styles.explainersWrapper}>
    STEP: { step }
    <Explainer
      letter="A"
      title="Tell us about yourself"
      body="We will get the information required to do something special. All good."
    />
    <Explainer
      letter="B"
      title="Who buys your products"
      body="Here you tell us who your products attracts. Where you want to be etc..."
    />
    <Explainer
      letter="C"
      title="Showcase your products"
      body="You'll be asked to list your products and upload images, list prices, etc..."
    />
  </div>
);

OnboardBrand.propTypes = {
  step: PropTypes.string,
};

OnboardBrand.defaultProps = {
  step: '1',
};

export default OnboardBrand;

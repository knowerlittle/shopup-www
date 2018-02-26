import React from 'react';
import PropTypes from 'prop-types';
import BrandExplainer from 'components/OnboardUser/Brand/BrandExplainer';
import styles from 'components/OnboardUser/index.css';
// import { Link } from 'react-router-dom';

const OnboardBrand = ({ step }) => (
  <div className={styles.explainersWrapper}>
    STEP: { step }
    <BrandExplainer
      option="A"
    />
    <BrandExplainer
      option="B"
    />
    <BrandExplainer
      option="C"
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

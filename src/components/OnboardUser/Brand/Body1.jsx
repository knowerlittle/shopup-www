import React from 'react';
import BrandExplainer from 'components/OnboardUser/Brand/BrandExplainer';
import styles from 'components/OnboardUser/index.css';

const Body1 = () => (
  <div className={styles.explainersWrapper}>
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

export default Body1;

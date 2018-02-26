import React from 'react';
import LinkButton from 'components/Global/LinkButton';
import BrandExplainer from 'components/OnboardUser/Brand/BrandExplainer';
import styles from 'components/OnboardUser/index.css';

const question = 'What is the name of your brand ?';

const Body2 = () => (
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
        name="lname"
        placeholder="Brand Name"
      />
      <LinkButton
        color="purple"
        text="CONTINUE"
        link="/onboard/brand/3"
        width="150"
      />
    </section>
  </div>
);

export default Body2;

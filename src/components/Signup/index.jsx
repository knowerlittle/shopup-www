import React from 'react';
import Button from 'components/Signup/Button';
import styles from 'components/Signup/index.css';

const spaceText = 'I have space';
const brandText = 'I need space';

const spaceLink = '/onboarding/space';
const brandLink = '/onboarding/brand';

const JourneyOptions = () => (
  <div className={styles.wrapper}>
    <Button text={spaceText} link={spaceLink} />
    <Button text={brandText} link={brandLink} />
  </div>
);

export default JourneyOptions;

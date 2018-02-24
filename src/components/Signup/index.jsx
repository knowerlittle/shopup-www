import React from 'react';
import Button from 'components/Signup/Button';
import styles from 'components/Signup/index.css';

const spaceText = 'I have space';
const brandText = 'I need space';

const spaceLink = '/onboarding/space';
const brandLink = '/onboarding/brand';

const footerText = 'Are you a Brand or a Space ?';

const JourneyOptions = () => (
  <div>
    <div className={styles.body}>
      <Button text={spaceText} link={spaceLink} />
      <Button text={brandText} link={brandLink} />
    </div>
    <div className={styles.footer}>
      <p>{footerText}</p>
    </div>
  </div>
);

export default JourneyOptions;

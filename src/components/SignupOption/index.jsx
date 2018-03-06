import React from 'react';
import Button from 'components/SignupOption/Button';
import styles from 'components/SignupOption/index.css';

const spaceText = 'I have space';
const brandText = 'I need space';

const spaceLink = '/onboard/space/1';
const brandLink = '/onboard/brand/1';

const footerText = 'Are you a Brand or a Space ?';

const SignupOption = () => (
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

export default SignupOption;

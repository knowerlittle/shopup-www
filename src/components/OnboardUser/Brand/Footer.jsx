import React from 'react';
import PropTypes from 'prop-types';
import LinkButton from 'components/Global/LinkButton';
import styles from 'components/OnboardUser/index.css';
import { withRouter } from 'react-router-dom';

const Footer = ({ match }) => (
  <div className={styles.onboardFooter}>
    <h3>Itinerary builder</h3>
    <p className={styles.footerExplainer}>
      Save, organize, and share all details here
      { match.params.step }
    </p>
    <LinkButton
      color="yellow"
      text="Got it!"
      link="/onboard/brand/2"
      height="50"
      width="200"
    />
  </div>
);

Footer.propTypes = {
  match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withRouter(Footer);

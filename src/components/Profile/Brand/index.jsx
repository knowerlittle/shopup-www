import React, { Component } from 'react';
import styles from 'components/Profile/index.css';

class BrandProfile extends Component {
  render() {
    const hi = 'hillo';

    return (
      <div className={styles.bodyWrapper}>
        {hi}
      </div>
    );
  }
}

export default BrandProfile;

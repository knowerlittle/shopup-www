import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Logo from 'components/Global/Logo';
import styles from 'components/Nav/index.css';
import SVG from 'react-inlinesvg';
import Notifications from 'assets/icons/ic_notifications.svg';
import ChatBubble from 'assets/icons/ic_chat_bubble.svg';
import DownArrow from 'assets/icons/ic_keyboard_arrow_down.svg';
import ProfileDemo from 'assets/img/demo/profiledemo.png';

const ProfileNav = ({ user }) => (
  <nav className={styles.navProfile}>
    <div className={styles.wrapper}>
      <div className={styles.logoContainer}>
        <Logo shadow="red" />
      </div>
      <div className={styles.menuContainer}>
        <ul>
          <li className={styles.accountText}>
            <SVG src={Notifications} />
          </li>
          <li className={styles.accountText}>
            <SVG src={ChatBubble} />
          </li>
          <li className={styles.userName}>
            {user.givenName}
            <img src={ProfileDemo} alt="profile" width="50" />
            <SVG src={DownArrow} />
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

ProfileNav.propTypes = {
  user: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = (state) => {
  const { user } = state.auth;
  return {
    user,
  };
};

export default connect(mapStateToProps)(ProfileNav);

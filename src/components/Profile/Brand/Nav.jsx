import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import AccountIcon from 'assets/icons/accountCircle.svg';
import CalenderIcon from 'assets/icons/miniCalender.svg';
import MessageIcon from 'assets/icons/ic_comment.svg';
import FindSpaceIcon from 'assets/icons/ic_search.svg';
import styles from 'components/Profile/index.css';

const Nav = ({ brandName }) => (
  <div className={styles.menuOptions}>
    <ul>
      <NavLink to="/brand/profile" className={styles.grey} activeClassName={styles.red} >
        <li>
          <SVG src={AccountIcon} />
          <span>{ brandName }</span>
        </li>
      </NavLink>
      <NavLink to="/brand/bookings" className={styles.grey} activeClassName={styles.red} >
        <li>
          <SVG src={CalenderIcon} />
          <span>Bookings</span>
        </li>
      </NavLink>
      <NavLink to="/brand/messages" className={styles.grey} activeClassName={styles.red} >
        <li>
          <SVG src={MessageIcon} />
          <span>Messages</span>
        </li>
      </NavLink>
      <NavLink to="/brand/spaces" className={styles.grey} activeClassName={styles.red} >
        <li>
          <SVG src={FindSpaceIcon} />
          <span>Find a Space</span>
        </li>
      </NavLink>
    </ul>
  </div>
);

Nav.propTypes = {
  brandName: PropTypes.string.isRequired,
};

export default Nav;

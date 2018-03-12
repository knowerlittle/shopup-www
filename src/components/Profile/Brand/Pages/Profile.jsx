import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import qs from 'query-string';
import styles from 'components/Profile/index.css';
import SVG from 'react-inlinesvg';
import Email from 'assets/icons/ic_email.svg';
import BackgroundDemo from 'assets/img/demo/brandbg.png';
import HatLady from 'assets/img/demo/hatdemo.png';
import demoShop1 from 'assets/img/demo/demoshop1.jpg';
import demoShop2 from 'assets/img/demo/demoshop2.jpg';
import shoes1 from 'assets/img/demo/demoshoes1.png';
import shoes2 from 'assets/img/demo/demoshoes2.png';
import shoes3 from 'assets/img/demo/demoshoes3.png';
import ReviewFull from 'assets/icons/ic_star.svg';
import ReviewHalf from 'assets/icons/ic_star_half.svg';
import Instagram from 'assets/icons/ic_instagram.svg';
import Twitter from 'assets/icons/ic_twitter.svg';
import Facebook from 'assets/icons/ic_facebook.svg';
import Dropdown from 'assets/icons/ic_more_horiz.svg';
import ArrowDown from 'assets/icons/ic_arrow_downward.svg';
import Cake from 'assets/icons/ic_cake.svg';
import Favorite from 'assets/icons/ic_favorite.svg';
import Language from 'assets/icons/ic_language.svg';
import City from 'assets/icons/ic_location_city.svg';
import People from 'assets/icons/ic_people.svg';
import School from 'assets/icons/ic_school.svg';
import Work from 'assets/icons/ic_work.svg';
import Subscriptions from 'assets/icons/ic_subscriptions.svg';
import Schedule from 'assets/icons/ic_schedule.svg';

const divStyle = {
  backgroundImage: `url(${BackgroundDemo}`,
  backgroundSize: 'cover',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
};

const brandDescription = `Co-founder, chairman, and chief executive officer (CEO)
    of Apple Inc CEO and majority shareholder of Pixar Animation Studios;
    a member of The Walt Disney Company's`;

class Profile extends Component {
  componentDidUpdate() {
    const { location } = this.props;
    const { section } = qs.parse(location.search);
    if (section) {
      document.getElementById(section).scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    }
  }
  render() {
    const {
      brand,
      location,
      history: { push },
    } = this.props;
    const query = qs.parse(location.search);

    return (
      <div className={styles.pageWrapper}>
        <section className={styles.profileInfo} style={divStyle}>
          <div className={styles.profileLeft}>
            <img src={HatLady} alt="Brand" width="120" />
          </div>
          <div className={styles.profileCenter}>
            <div className={styles.profileTop}>
              <span className={styles.brandName}>{brand.name}</span>
              <p>{brandDescription}</p>
            </div>
            <div className={styles.profileMiddle}>
              <p>45 <span>Views</span></p>
              <p>10 <span>Events</span></p>
              <p>
                <SVG src={ReviewFull} />
                <SVG src={ReviewFull} />
                <SVG src={ReviewFull} />
                <SVG src={ReviewFull} />
                <SVG src={ReviewHalf} />
              </p>
            </div>
            <div className={styles.profileSocial}>
              <div className={styles.purpleCircleSmall}>
                <SVG src={Twitter} />
              </div>
              <div className={styles.purpleCircleSmall}>
                <SVG src={Instagram} />
              </div>
              <div className={styles.purpleCircleSmall}>
                <SVG src={Facebook} />
              </div>
            </div>
            <div className={styles.profileMenu}>
              <div
                id="overview"
                className={query.section === 'overview' ?
                  styles.profileMenuSelected :
                  styles.profileMenu}
                onClick={() => push('profile?section=overview')}
                onKeyDown={() => {}}
                role="presentation"
              >
                <p>Overview</p>
              </div>
              <div
                className={query.section === 'products' ?
                  styles.profileMenuSelected :
                  styles.profileMenu}
                onClick={() => push('profile?section=products')}
                onKeyDown={() => {}}
                role="presentation"
              >
                <p>Products</p>
              </div>
              <div
                className={query.section === 'events' ?
                  styles.profileMenuSelected :
                  styles.profileMenu}
                onClick={() => push('profile?section=events')}
                onKeyDown={() => {}}
                role="presentation"
              >
                <p>Events</p>
              </div>
              <div
                className={query.section === 'reviews' ?
                  styles.profileMenuSelected :
                  styles.profileMenu}
                onClick={() => push('profile?section=reviews')}
                onKeyDown={() => {}}
                role="presentation"
              >
                <p>Reviews</p>
              </div>
            </div>
          </div>
          <div className={styles.profileRight}>
            <div className={styles.purpleCircle}>
              <SVG src={Email} />
            </div>
          </div>
        </section>

        <section
          id="overview"
          className={styles.overviewInfo}
        >
          <div className={styles.infoBoxTop}>
            <p>Overview</p>
            <p><SVG src={Dropdown} /></p>
          </div>
          <div className={styles.infoBoxBody}>
            <ul className={styles.overviewBreakdown}>
              <li>
                <div><SVG src={Cake} className={styles.cakeIcon} /></div>
                <div>
                  <p className={styles.overviewDescription}>22 Aug 1993</p>
                  <p className={styles.overviewSubject}>Birthday</p>
                </div>
              </li>
              <li>
                <div><SVG src={Favorite} className={styles.favoriteIcon} /></div>
                <div>
                  <p className={styles.overviewDescription}>Single</p>
                  <p className={styles.overviewSubject}>Relationship</p>
                </div>
              </li>
              <li>
                <div><SVG src={City} className={styles.cityIcon} /></div>
                <div>
                  <p className={styles.overviewDescription}>London</p>
                  <p className={styles.overviewSubject}>Hometown</p>
                </div>
              </li>
              <li>
                <div><SVG src={People} className={styles.peopleIcon} /></div>
                <div>
                  <p className={styles.overviewDescription}>Woman</p>
                  <p className={styles.overviewSubject}>Gender</p>
                </div>
              </li>
              <li>
                <div><SVG src={School} className={styles.schoolIcon} /></div>
                <div>
                  <p className={styles.overviewDescription}>Makers Academy</p>
                  <p className={styles.overviewSubject}>Education</p>
                </div>
              </li>
              <li>
                <div><SVG src={Work} className={styles.workIcon} /></div>
                <div>
                  <p className={styles.overviewDescription}>Incorporated</p>
                  <p className={styles.overviewSubject}>Work</p>
                </div>
              </li>
              <li>
                <div><SVG src={Subscriptions} className={styles.subscriptionsIcon} /></div>
                <div>
                  <p className={styles.overviewDescription}>www.brand.com</p>
                  <p className={styles.overviewSubject}>Website</p>
                </div>
              </li>
              <li>
                <div><SVG src={Language} className={styles.languageIcon} /></div>
                <div>
                  <p className={styles.overviewDescription}>English</p>
                  <p className={styles.overviewSubject}>Language</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section
          id="products"
          className={styles.productInfo}
        >
          <div className={styles.infoBoxTop}>
            <p>My products<span>&nbsp;&nbsp;&nbsp; 43</span></p>
            <p><SVG src={Dropdown} /></p>
          </div>
          <div className={styles.infoBoxBody}>
            <div className={styles.productInnerWrapper}>
              <ul>
                <li>
                  <div className={styles.productInformation}>
                    <p className={styles.productPrice}>$ 200.50</p>
                    <img src={shoes1} alt="product" />
                    <p className={styles.productDescription}>Ankle Boots</p>
                  </div>
                </li>
                <li>
                  <div className={styles.productInformation}>
                    <p className={styles.productPrice}>$ 100.25</p>
                    <img src={shoes2} alt="product" />
                    <p className={styles.productDescription}>Fabric Shoes</p>
                  </div>
                </li>
                <li>
                  <div className={styles.productInformation}>
                    <p className={styles.productPrice}>$ 40.50</p>
                    <img src={shoes3} alt="product" />
                    <p className={styles.productDescription}>Suede Boots</p>
                  </div>
                </li>
                <li>
                  <div className={styles.productInformation}>
                    <p className={styles.productPrice}>$ 200.50</p>
                    <img src={shoes1} alt="product" />
                    <p className={styles.productDescription}>Ankle Boots</p>
                  </div>
                </li>
                <li>
                  <div className={styles.productInformation}>
                    <p className={styles.productPrice}>$ 100.25</p>
                    <img src={shoes2} alt="product" />
                    <p className={styles.productDescription}>Fabric Shoes</p>
                  </div>
                </li>
                <li>
                  <div className={styles.productInformation}>
                    <p className={styles.productPrice}>$ 40.50</p>
                    <img src={shoes3} alt="product" />
                    <p className={styles.productDescription}>Suede Boots</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.infoBoxBottom}>
            <p>SHOW ALL</p><p><SVG src={ArrowDown} /></p>
          </div>
        </section>

        <section
          id="events"
          className={styles.productInfo}
        >
          <div className={styles.infoBoxTop}>
            <div className={styles.eventsTabWrapper}>
              <div className={styles.eventsTabOptionsSelected}>Upcoming Events</div>
              <div className={styles.eventsTabOptions}>Past Events</div>
            </div>
            <p><SVG src={Dropdown} /></p>
          </div>
          <div className={styles.infoBoxBody}>
            <div className={styles.eventsInnerWrapper}>
              <ul>
                <li>
                  <div className={styles.eventsListContainer}>
                    <div className={styles.eventsTopHalf}>
                      <p><SVG src={Schedule} /></p>
                      <p className={styles.eventTime}>11 Oct 2016, 10:00am - 07:00pm</p>
                    </div>
                    <div className={styles.eventsBottomHalf}>
                      <div className={styles.eventsImageName}>
                        <div className={styles.eventsImageWrapper}>
                          <img src={demoShop1} alt="shop" width="180" />
                        </div>
                        <p>SPACE NAME</p>
                      </div>
                      <div className={styles.eventsInterested}>
                        <div className={styles.eventsOptionButton}>
                          INTERESTED
                        </div>
                        <div className={styles.eventsOptionButton}>
                          GOING
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <img src={demoShop2} alt="shop" width="150" />
                  Event 2
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.infoBoxBottom}>
            <p>SHOW ALL</p><p><SVG src={ArrowDown} /></p>
          </div>
        </section>

        <section
          id="reviews"
          className={styles.productInfo}
        >
          <div className={styles.infoBoxTop}>
            <p>Reviews</p>
            <p><SVG src={Dropdown} /></p>
          </div>
          <div className={styles.infoBoxBody}>
            Body
          </div>
          <div className={styles.infoBoxBottom}>
            <p>SHOW ALL</p><p><SVG src={ArrowDown} /></p>
          </div>
        </section>
      </div>
    );
  }
}

Profile.propTypes = {
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  brand: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => {
  const { brand } = state.auth;
  return {
    brand,
  };
};

export default withRouter(connect(mapStateToProps)(Profile));

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Button from 'components/Global/Button';
import BrandExplainer from 'components/OnboardUser/Brand/BrandExplainer';
import styles from 'components/OnboardUser/index.css';
import plusIcon from 'assets/icons/plusGrey.png';
import productDemo1 from 'assets/img/demo/productdemo1.jpg';
import productDemo3 from 'assets/img/demo/productdemo3.png';
import productDemo4 from 'assets/img/demo/productdemo4.png';

class Step6 extends Component {
  render() {
    // const {
    // dispatch,
    // history: { push },
    // } = this.props;
    const question = 'Add Products?';
    return (
      <div className={styles.card}>
        <section className={styles.leftSection}>
          <BrandExplainer
            option="C"
            width="260"
          />
        </section>
        <section className={styles.rightSection}>
          <div className={styles.topWrapper}>
            {question}
          </div>

          <div className={styles.middleWrapperPhotos}>
            <div className={styles.addPhotoOption}>
              <img src={plusIcon} alt="plus" width="15" />
              Add photo
            </div>
            <div className={styles.boxBorder}>
              <div className={styles.photoWrapper}>
                <div className={styles.photoPreview}>
                  <img src={productDemo1} alt="demo" />
                </div>
                <div className={styles.photoPreview}>
                  <img src={productDemo4} alt="demo" />
                </div>
                <div className={styles.photoPreview}>
                  <img src={productDemo3} alt="demo" />
                </div>
                <div className={styles.photoPreview}>
                  Photo
                </div>
                <div className={styles.photoPreview}>
                  Photo
                </div>
                <div className={styles.photoPreview}>
                  Photo
                </div>
              </div>
            </div>
          </div>

          <div className={styles.buttonWrapperCenter}>
            <Link to="/onboard/brand/7">
              <Button
                color="purple"
                text="DONE"
                width="150"
                onClick={() => {}}
              />
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

// Step6.propTypes = {
//   history: PropTypes.shape({
//     push: PropTypes.func.isRequired,
//   }).isRequired,
//   // dispatch: PropTypes.func.isRequired,
// };


export default withRouter(connect()(Step6));

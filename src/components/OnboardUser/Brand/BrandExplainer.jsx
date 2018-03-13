import React from 'react';
import Explainer from 'components/OnboardUser/Explainer';
import PropTypes from 'prop-types';

const title = {
  A: 'Tell us about yourself',
  B: 'Who buys your products',
  C: 'Showcase your products',
};

const body = {
  A: 'Tell us who you are ... we all want to know!',
  B: 'Here you tell us who your products attracts and where it fits in...',
  C: 'You will be asked to list your products with images and prices...',
};

const BrandExplainer = ({ option, width, height }) => (
  <Explainer
    option={option}
    title={title[option]}
    body={body[option]}
    width={width}
    height={height}
  />
);

BrandExplainer.propTypes = {
  option: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

BrandExplainer.defaultProps = {
  width: '250',
  height: '',
};

export default BrandExplainer;

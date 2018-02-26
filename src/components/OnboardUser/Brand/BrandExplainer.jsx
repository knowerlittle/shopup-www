import React from 'react';
import Explainer from 'components/OnboardUser/Explainer';
import PropTypes from 'prop-types';

const title = {
  A: 'Tell us about yourself',
  B: 'Who buys your products',
  C: 'Showcase your products',
};

const body = {
  A: 'We will get the information required to do something special. All good.',
  B: 'Here you tell us who your products attracts. Where you want to be etc...',
  C: 'You will be asked to list your products and upload images, list prices, etc...',
};

const BrandExplainer = ({ option }) => (
  <Explainer
    option={option}
    title={title[option]}
    body={body[option]}
  />
);

BrandExplainer.propTypes = {
  option: PropTypes.string.isRequired,
};

export default BrandExplainer;

import React from 'react';
import Hero from './';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

test('<Hero /> renders correctly', () => {
  const tree = shallow(
    <Hero/>
  );
  expect(toJson(tree)).toMatchSnapshot();
});
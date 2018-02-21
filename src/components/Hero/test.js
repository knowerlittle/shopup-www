import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Hero from './';

test('<Hero /> renders correctly', () => {
  const tree = shallow(
    <Hero/>
  );
  expect(toJson(tree)).toMatchSnapshot();
});
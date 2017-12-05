import React from 'react';
import Nav from './';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

test('<Nav /> renders correctly', () => {
  const tree = shallow(
    <Nav />
  );
  expect(toJson(tree)).toMatchSnapshot();
});
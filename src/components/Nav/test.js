import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Nav from './';

test('<Nav /> renders correctly', () => {
  const tree = shallow(
    <Nav nav="home"/>
  );
  expect(toJson(tree)).toMatchSnapshot();
});
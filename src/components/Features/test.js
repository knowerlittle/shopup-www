import React from 'react';
import Feature from './';
import {
  shallow
} from 'enzyme';
import toJson from 'enzyme-to-json';


describe('Feature component tests', () => {
  test('<Feature /> renders correctly', () => {
    const tree = shallow( <
      Feature / >
    );
    expect(toJson(tree)).toMatchSnapshot();
  });
});
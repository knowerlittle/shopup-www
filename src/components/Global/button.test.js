import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button, { options, setDimensions } from './Button';
import PropTypes from 'prop-types';

describe('<Button />', () => {
  describe('general', () => {
    it('options: has 5 color options', () => {
      const optionsCount = Object.keys(options).length;

      expect(optionsCount).toEqual(5);
      expect(options['white']).toBeTruthy();
      expect(options['yellow']).toBeTruthy();
      expect(options['purple']).toBeTruthy();
      expect(options['whiteYellow']).toBeTruthy();
      expect(options['disabled']).toBeTruthy();
    });

    it('setDimensions: returns correct object', () => {
      const result = setDimensions('100', '200');
      const expectedResult = {
        height: '100px',
        width: '200px',
      };
      expect(result).toEqual(expectedResult);
    });
  });

  describe('props', () => {
    const { text, color, height, width, onClick } = Button.propTypes;

    it('has 5', () => {
      const count = Object.keys(Button.propTypes).length;
      expect(count).toEqual(5);
    });
  
    it('\'text\' is a string that is required', () => {
      expect(text).toBe(PropTypes.string.isRequired);
    });
  
    it('\'color\' is a string that is required', () => {
      expect(color).toBe(PropTypes.string.isRequired);
    });
  
    it('\'height\' is a string', () => {
      expect(height).toBe(PropTypes.string);
    });
  
    it('\'width\' is a string', () => {
      expect(width).toBe(PropTypes.string);
    });
  
    it('\'onClick\' is a function', () => {
      expect(onClick).toBe(PropTypes.func);
    });
  });

  describe('defaultProps', () => {
    const { height, width, onClick } = Button.defaultProps;

    it('has 3', () => {
      const count = Object.keys(Button.defaultProps).length;
      expect(count).toEqual(3);
    });

    it('height is set to 50', () => {
      const heightDefault = '50';
      expect(height).toEqual(heightDefault);
    });

    it('width is set to 200', () => {
      const widthDefault = '200';
      expect(width).toEqual(widthDefault);
    });

    it('onClick returns empty object', () => {
      const onClickDefault = {};
      expect(onClick()).toEqual(onClickDefault);
    });
  });

  describe('Snapshot', () => {
    it('renders correctly', () => {
      const whiteTree = shallow(
        <Button 
          text='white button' 
          color='white'
          height='100'
          width='40'
        />
      );
      const yellowTree = shallow(
        <Button 
          text='yellow button' 
          color='yellow'
          height='300'
          width='30'
        />
      );

      expect(toJson(whiteTree)).toMatchSnapshot();
      expect(toJson(yellowTree)).toMatchSnapshot();
    });
  });
});
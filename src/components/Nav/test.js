import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Nav, { options } from './';

function getNavId (nav) {
  const navObject = Nav(nav);
  return navObject.type().props.id;
};

describe('<Nav />', () => { 
  it('has 3 Navigation options', () => {
    const optionsCount = Object.keys(options).length;
    
    expect(optionsCount).toEqual(3);
    expect(options['home']).toBeTruthy();
    expect(options['signup']).toBeTruthy();
    expect(options['profile']).toBeTruthy();
  });

  it('prop: { nav: \'home\' } mounts <Home /> Nav', () => {
    const navId = getNavId({nav: 'home'});
    const expected = 'nav-home';

    expect(navId).toEqual(expected);
  });

  it('prop: { nav: \'signup\' } mounts <Signup /> Nav', () => {
    const navId = getNavId({nav: 'signup'});
    const expected = 'nav-signup';

    expect(navId).toEqual(expected);
  });

  it('prop: { nav: \'profile\' } mounts <Profile /> Nav', () => {
    const profileNav = Nav({ nav: 'profile' });
    const navId = profileNav.type['WrappedComponent']({user: 'Test User'}).props.id;
    const expected = 'nav-profile';

    expect(navId).toEqual(expected);
  });

  it('defaultProps: nav is set to \'home\'', () => {
    const navDefault = 'home';
    expect(Nav.defaultProps['nav']).toEqual(navDefault);
  });

  it('renders correctly', () => {
    const homeTree = shallow(<Nav nav="home"/>);
    const signupTree = shallow(<Nav nav="signup"/>);
    const profileTree = shallow(<Nav nav="profile"/>);
    expect(toJson(homeTree)).toMatchSnapshot();
    expect(toJson(signupTree)).toMatchSnapshot();
    expect(toJson(profileTree)).toMatchSnapshot();
  });

});
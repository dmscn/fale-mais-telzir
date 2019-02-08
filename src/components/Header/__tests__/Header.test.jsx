import React from 'react'
import Header from '../Header';

describe('<Header />', () => {
  it('should render', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
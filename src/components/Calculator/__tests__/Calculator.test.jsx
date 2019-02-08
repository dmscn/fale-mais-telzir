import React from 'react'
import Calculator from '../Calculator';

describe('<Calculator />', () => {
  it('should render', () => {
    const wrapper = shallow(<Calculator />);
    expect(wrapper).toMatchSnapshot();
  });
});
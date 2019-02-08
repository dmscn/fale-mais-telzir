import React from 'react'
import BottomNav from '../BottomNav';

describe('<BottomNav />', () => {
  it('should render', () => {
    const wrapper = shallow(<BottomNav />);
    expect(wrapper).toMatchSnapshot();
  });
});
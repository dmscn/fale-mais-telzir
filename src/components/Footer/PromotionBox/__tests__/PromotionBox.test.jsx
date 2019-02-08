import React from 'react'
import PromotionBox from '../PromotionBox';

describe('<PromotionBox />', () => {
  it('should render', () => {
    const wrapper = shallow(<PromotionBox />);
    expect(wrapper).toMatchSnapshot();
  });
});
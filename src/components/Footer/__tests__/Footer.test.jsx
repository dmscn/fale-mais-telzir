import React from 'react'
import Footer from '../Footer';

describe('<Footer />', () => {
  it('should render', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
import React from 'react'
import Result from '../Result';

describe('<Result />', () => {
  it('should render', () => {
    const wrapper = shallow(<Result />);
    expect(wrapper).toMatchSnapshot();
  });
});
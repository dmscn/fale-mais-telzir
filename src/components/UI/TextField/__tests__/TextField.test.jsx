import React from 'react'
import TextField from '../TextField';

describe('<TextField />', () => {
  it('should render', () => {
    const wrapper = shallow(<TextField />);
    expect(wrapper).toMatchSnapshot();
  });
});
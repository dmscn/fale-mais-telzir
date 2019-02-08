import React from 'react'
import InputFields from '../InputFields';

describe('<InputFields />', () => {
  it('should render', () => {
    const wrapper = shallow(<InputFields />);
    expect(wrapper).toMatchSnapshot();
  });
});
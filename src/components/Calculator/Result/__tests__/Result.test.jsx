import React from 'react'
import Result from '../Result';

describe('<Result />', () => {
  it('should render', () => {
    const mockedResultProp = {
      commonPrice: 120,
      promotionPrice: 45
    };

    const wrapper = shallow(<Result result={mockedResultProp}/>);
    
    expect(wrapper).toMatchSnapshot();
  });
});
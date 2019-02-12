import React from 'react';
import Calculator from '../Calculator';

describe('<Calculator />', () => {
  it('should render', () => {
    const wrapper = shallow(<Calculator />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should calculate', () => {
    const wrapper = shallow(<Calculator />);
    const instance = wrapper.instance();

    let mockParams = {
      plan: {
        descountMin: 30,
        taxIncrease: 1.5,
      },
      tax: {
        pricePerMinute: 2,
      },
      time: "60",
    }

    let expectedResult = {
      commonPrice: 120,
      promotionPrice: 45,
    }

    instance.calculate(mockParams);
    expect(wrapper.state('result')).toEqual(expectedResult);
  })
});
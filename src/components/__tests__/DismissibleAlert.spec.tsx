import React from 'react';
import { shallow } from 'enzyme';

import DismissibleAlert from '../DismissibleAlert/DismissibleAlert';

describe('DismissibleAlert', () => {
  it('should render demo component', () => {
    const props = {
      isOpen: true,
      dismissBar: () => undefined,
    };
    const wrapper = shallow(<DismissibleAlert {...props} />);
    expect(wrapper.render().text()).toMatch('This is a dismissible demo component');
  });
});

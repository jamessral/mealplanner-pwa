import {shallow} from 'enzyme';
import * as React from 'react';
import Navbar from './';

const factory = () => <Navbar />;

describe('<Navbar />', () => {
  it('should render', () => {
    shallow(factory());
  });
});

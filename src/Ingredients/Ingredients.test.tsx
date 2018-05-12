import {shallow} from 'enzyme';
import * as React from 'react';
import Ingredients from './';

const factory = () => <Ingredients />;

describe('<Ingredients />', () => {
  it('should render', () => {
    shallow(factory());
  });
});

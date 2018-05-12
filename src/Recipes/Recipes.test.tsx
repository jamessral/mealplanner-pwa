import {shallow} from 'enzyme';
import * as React from 'react';
import Recipes from './';

const factory = () => <Recipes />;

describe('<Recipes />', () => {
  it('should render', () => {
    shallow(factory());
  });
});

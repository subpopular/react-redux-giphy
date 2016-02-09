import expect from 'expect';
import React from 'react';
import { findDOMNode } from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from '../src/client/components/App';

describe('A React application', () => {

  it('should present a welcome message', () => {
    let c = TestUtils.renderIntoDocument(<App />);
    expect(findDOMNode(c).innerHTML).toEqual('Welcome to your pretty new app!');
  });

});

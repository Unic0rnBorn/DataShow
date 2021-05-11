import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';

export const TestComponentContainer = ( props ) => {
  Object.defineProperty(window, 'location', {
    writable: true,
    value: {
      origin: 'http://test',
      href: ''
    }
  });

  return (
      <Router>
        <Provider store={props.store}>
          {props.children}
        </Provider>
      </Router>
  );
};

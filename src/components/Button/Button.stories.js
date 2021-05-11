import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Base = () => (
  <Button onClick={() => alert('You clicked Hello Buton')}>Hello Button</Button>
);

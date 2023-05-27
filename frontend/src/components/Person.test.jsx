import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Person from './Person';

test('renders content', () => {
  const person = {
    name: 'Matti Meikäläinen',
    number: '040-112233'
  };

  render(<Person person={person} />);

  const element = screen.getByText((content, element) => content.startsWith('Matti Meikäläinen'));
  expect(element).toBeDefined();
});

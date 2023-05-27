import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Notification from './Notification';

const notification = {
  message: 'Test message',
  type: 'error'
};

test('renders error message', function () {
  render(<Notification notification={notification} />);

  const element = screen.getByText('Test message');
  expect(element).toBeDefined();
});

test('error message gets the correct class name', function () {
  const { container } = render(<Notification notification={notification} />);
  expect(container.firstChild).toHaveClass('notification error');
});

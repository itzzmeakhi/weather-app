import {
  screen,
  render
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TaskField from '../../components/TaskField/TaskField';


test('input field to be in the DOM', () => {
  render(<TaskField />);
  const inputElem = screen.queryByRole(
    'textbox', 
    { name: 'Task' }
  );
  expect(inputElem).toBeInTheDocument();
});

test('input value with respect to keyboard events', () => {
  render(<TaskField />);

  const inputElem = screen.getByRole(
    'textbox',
    { name: 'Task' }
  );
  userEvent.clear(inputElem);
  userEvent.type(inputElem, 'listen to a podcast');
  expect(inputElem.value).toBe('listen to a podcast');

  userEvent.clear(inputElem);
  expect(inputElem.value).toBe('');
});

test('add button renders with correct text', () => {
  render(<TaskField />);

  const btnElem = screen.queryByRole(
    'button',
    { name: 'Add Task' }
  );
  expect(btnElem).toBeInTheDocument();
});
import {
  screen,
  render
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CityField from '../../components/CityField/CityField';


test('input field to be in the DOM', () => {
  render(<CityField />);
  const inputElem = screen.queryByRole(
    'textbox', 
    { name: 'City' }
  );
  expect(inputElem).toBeInTheDocument();
});

test('input value with respect to keyboard events', () => {
  render(<CityField />);

  const inputElem = screen.getByRole(
    'textbox',
    { name: 'City' }
  );
  userEvent.clear(inputElem);
  userEvent.type(inputElem, 'Bangalore');
  expect(inputElem.value).toBe('Bangalore');

  userEvent.clear(inputElem);
  expect(inputElem.value).toBe('');
});

test('add button renders with correct text', () => {
  render(<CityField />);

  const btnElem = screen.queryByRole(
    'button',
    { name: 'Add City' }
  );
  expect(btnElem).toBeInTheDocument();
});
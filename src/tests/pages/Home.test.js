import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../../App';

describe('Tests Home page', () => {
  describe('checks that all expected elements have been rendered', () => {
    const LOGIN_BTN = 'login-btn';

    beforeEach(cleanup);

    it('checks if the title "Todo List" has been rendered', () => {
      renderWithRouter(<App />);
      const headerTitle = screen.getByRole('heading', { name: 'Todo List' });
      expect(headerTitle).toBeInTheDocument();
    });

    it('check if it has a login button', () => {
      renderWithRouter(<App />);
      const buttonLogin = screen.getByTestId(LOGIN_BTN);
      expect(buttonLogin).toBeInTheDocument();
    });

    it('check if the login button has the "button-login" class', () => {
      renderWithRouter(<App />);
      const buttonLogin = screen.getByTestId(LOGIN_BTN);
      expect(buttonLogin).toHaveClass('button-login');
    });
  });
});

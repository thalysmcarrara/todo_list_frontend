import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../../App';

const LOGIN_BTN = 'login-btn';

describe('Tests Home page', () => {
  describe('checks that all expected elements have been rendered', () => {
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

  describe('behavior tests', () => {
    beforeEach(cleanup);

    it('checks when clicking the login button navigates to the "/login" route', () => {
      const { history } = renderWithRouter(<App />);
      const buttonLogin = screen.getByTestId(LOGIN_BTN);
      userEvent.click(buttonLogin);
      expect(history.location.pathname).toBe('/login');
    });
  });
});

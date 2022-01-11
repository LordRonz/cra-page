import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';
import About from './components/About';
import Footer from './components/Footer';

test('renders Hi', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hi, I'm/);
  expect(linkElement).toBeInTheDocument();
});

test('renders footer', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Reach me out/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders about', () => {
  render(<About />);
  const element = screen.getAllByText(/computer engineering/i)[0];
  const element2 = screen.getAllByText(/institut teknologi sepuluh nopember/i)[0];
  expect(element).toBeInTheDocument();
  expect(element2).toBeInTheDocument();
});

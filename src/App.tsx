import './App.css';
import './styles/globals.css';

import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';

import Home from './components/Home';

const About = lazy(() => import('./components/About'));
const Footer = lazy(() => import('./components/Footer'));

export const Main = (): JSX.Element => (
  <div className="App bg-gray-900 body-font">
    <Helmet>
      <title>Aaron Christopher</title>
    </Helmet>
    <Home />
    <Suspense fallback={<div>Loading...</div>}>
      <About />
      <Footer />
    </Suspense>
  </div>
);

const App = (): JSX.Element => <Main />;

export default App;

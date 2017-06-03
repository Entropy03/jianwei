import React from 'react';
import Navigation from './navigation';
import Header from './header.js';
const Layout = ({content = () => null }) => (
  <div>
    <Header />


    <div>


    {content()}

    </div>

    <footer>
    <small>Built with <a href='https://github.com/kadirahq/mantra'>Mantra</a> &amp; Meteor.</small>
    </footer>
  </div>
);

export default Layout;

import React, { Suspense } from 'react';
import Loader from '../components/elements/Loader';

const Header = React.lazy(() => import('../components/Header'));
const SideNavBar = React.lazy(() => import('../components/SideNavBar'));
const ContactList = React.lazy(() => import('./ContactList'));

const ContactListApp = (props) => {
  return (
    <div className="contact-list-app">
      <Suspense fallback={<Loader />}>
        <Header />
        <SideNavBar />
        <ContactList />
      </Suspense>
    </div>
  );
};

export default ContactListApp;

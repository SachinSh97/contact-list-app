import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faPlus } from '@fortawesome/free-solid-svg-icons';
import './ContactList.scss';

const SearchBox = React.lazy(() => import('../../components/SearchBox'));
const Button = React.lazy(() => import('../../components/elements/Button'));

const ContactList = () => {
  return (
    <div className="contact-list">
      <div className="contact-list_header">
        <div className="logo">
          <FontAwesomeIcon icon={faAddressBook} />
        </div>
        <div className="detail">
          <span className="title">Contacts</span>
          <span className="description">The Lorem Ipsum for contact list.</span>
        </div>
      </div>
      <div className="contact-list_content">
        <div className="contact-list_content_actions">
          <SearchBox placeholder="Search contacts" onFetchData={() => {}} />
          <Button
            content="Add Contacts"
            startIcon={<FontAwesomeIcon icon={faPlus} />}
            onClick={() => {}}
          />
        </div>
        <div className="contact-list_content_contacts"></div>
        <div className="contact-list_content_contact-details"></div>
      </div>
    </div>
  );
};

export default ContactList;

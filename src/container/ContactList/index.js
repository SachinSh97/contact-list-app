import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faPlus } from '@fortawesome/free-solid-svg-icons';
import { sortList, randomBgColor } from '../../utils/helper';
import './ContactList.scss';

import { contacts } from '../../masterData';

// low-level component
const SearchBox = React.lazy(() => import('../../components/SearchBox'));
const Button = React.lazy(() => import('../../components/elements/Button'));

// high-level component
const ContactTable = React.lazy(() => import('../component/ContactTable'));
const ContactDetailsCard = React.lazy(() =>
  import('../component/ContactDetailsCard'),
);
const ContactForm = React.lazy(() => import('../component/ContactForm'));

const ContactList = () => {
  const [contactList, setContactList] = useState([]);
  const [searchedContactlist, setSearchcontactList] = useState([]);
  const [selectedContact, setSelectedContact] = useState({});
  const [openForm, setOpenForm] = useState(false);
  const [editContact, setEditContact] = useState({});

  useEffect(() => {
    const sortedContactList = [];
    contacts.forEach((contact) => {
      sortedContactList.push({ ...contact, color: randomBgColor() });
    });
    sortList(sortedContactList, 'name');
    setContactList(sortedContactList);
  }, []);

  const handleFetchData = (value) => {
    if (value?.length > 0) {
      const newlySearchContacts = contactList.filter((contact) =>
        contact?.name?.toUpperCase()?.includes(value?.toUpperCase()),
      );
      setSearchcontactList(newlySearchContacts);
    } else {
      setSearchcontactList([]);
    }
  };

  const handleOnSelectContact = (rowId) => {
    let newlySelectedContact = contactList.find(
      (contact) => contact?.id === rowId,
    );

    setSelectedContact(newlySelectedContact);
  };

  const handleEditContact = (event, contactId) => {
    event.stopPropagation();
    let newlyEditContact = contactList.find(
      (contact) => contact?.id === contactId,
    );

    setEditContact(newlyEditContact);
    setOpenForm(true);
  };

  const handleUpateContactList = (newContact) => {
    const newcontactList = contactList.filter(
      (contact) => contact?.id !== newContact?.id,
    );
    if (newcontactList?.length === contactList?.length) {
      newcontactList.push({
        ...newContact,
        id: Date.now(),
        color: randomBgColor(),
      });
    } else {
      newcontactList.push(newContact);
    }
    sortList(newcontactList, 'name');
    setContactList(newcontactList);
    handleClose();
  };

  const handleOpenForm = () => setOpenForm(true);

  const handleClose = () => {
    setOpenForm(false);
    setEditContact({});
  };

  return (
    <>
      <div className="contact-list">
        <div className="contact-list_header">
          <div className="logo">
            <FontAwesomeIcon icon={faAddressBook} />
          </div>
          <div className="detail">
            <span className="title">Contacts</span>
            <span className="description">
              The Lorem Ipsum for contact list.
            </span>
          </div>
        </div>
        <div className="contact-list_content">
          <div className="contact-list_content_actions">
            <SearchBox
              placeholder="Search contacts"
              onFetchData={handleFetchData}
            />
            <Button
              content="Add Contacts"
              startIcon={<FontAwesomeIcon icon={faPlus} />}
              onClick={handleOpenForm}
            />
          </div>
          <div className="contact-list_content_wrapper">
            <div className="contact-list_content_contacts">
              <ContactTable
                contactList={
                  searchedContactlist?.length > 0
                    ? searchedContactlist
                    : contactList
                }
                selectedId={selectedContact?.id}
                handleEditContact={handleEditContact}
                onSelectContact={handleOnSelectContact}
              />
            </div>
            <div className="contact-list_content_contact-details">
              {Object.keys(selectedContact)?.length > 0 && (
                <ContactDetailsCard contactDetails={selectedContact} />
              )}
            </div>
          </div>
        </div>
      </div>
      {openForm && (
        <ContactForm
          open={openForm}
          initialFormState={editContact}
          handleClose={handleClose}
          handleUpateContactList={handleUpateContactList}
        />
      )}
    </>
  );
};

export default ContactList;

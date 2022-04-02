import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { contactTableColumn } from '../../../config';
import './ContactTable.scss';

const Table = React.lazy(() => import('../../../components/elements/Table'));
const Avatar = React.lazy(() => import('../../../components/elements/Avatar'));

const ContactTable = ({
  contactList,
  selectedId,
  handleEditContact,
  onSelectContact,
}) => {
  const renderContactRows = (contactList) =>
    contactList?.map((contact) => ({
      id: contact?.id ?? '',
      info: (
        <div className="user">
          <Avatar name={contact?.name ?? ''} color={contact?.color} />
          <div className="user_info">
            <span className="user_name">{contact?.name ?? ''}</span>
            <span className="user_email">{contact?.email ?? ''}</span>
          </div>
        </div>
      ),
      company: <span className="user_company">{contact?.company ?? ''}</span>,
      edit: (
        <div
          className="user_action"
          onClick={(event) => handleEditContact(event, contact?.id)}
        >
          <FontAwesomeIcon icon={faEdit} />
        </div>
      ),
    }));

  return (
    <div className="contact-table">
      <Table
        columns={contactTableColumn}
        rows={renderContactRows(contactList)}
        selectedId={selectedId}
        onSelectContact={onSelectContact}
      />
    </div>
  );
};

export default ContactTable;

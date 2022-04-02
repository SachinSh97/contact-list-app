import React from 'react';
import './ContactDetailsCard.scss';

const Avatar = React.lazy(() => import('../../../components/elements/Avatar'));
const Table = React.lazy(() => import('../../../components/elements/Table'));

const ContactDetailsCard = ({ contactDetails }) => {
  const detailSections = [
    { label: 'Full name :', value: contactDetails?.name },
    { label: 'Email :', value: contactDetails?.email },
    { label: 'Phone :', value: contactDetails?.phone },
    { label: 'Company :', value: contactDetails?.company },
    { label: 'Address :', value: contactDetails?.address },
  ];

  const renderDetails = (details) =>
    details?.map((detail) => (
      <div className="user-detail">
        <span className="label">{detail?.label ?? ''}</span>
        <span className="value">{detail?.value ?? ''}</span>
      </div>
    ));
  return (
    <div className="contact-details-card">
      <div className="contact-details-card_user">
        <Avatar name={contactDetails?.name} color={contactDetails?.color} />
        <span className="name">{contactDetails?.name}</span>
        <span className="about">{contactDetails?.about}</span>
      </div>
      <div className="contact-details-card_details">
        {renderDetails(detailSections)}
      </div>
    </div>
  );
};

export default ContactDetailsCard;

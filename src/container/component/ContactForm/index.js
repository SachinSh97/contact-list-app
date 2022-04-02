import React, { useEffect, useState } from 'react';
import produce from 'immer';
import { regex } from '../../../config';
import './ContactForm.scss';

const Modal = React.lazy(() => import('../../../components/elements/Modal'));
const TextField = React.lazy(() =>
  import('../../../components/elements/TextField'),
);
const Button = React.lazy(() => import('../../../components/elements/Button'));

const emailValidator = new RegExp(regex.emailValidator, 'i');
const phoneNumberValidator = new RegExp(regex.phoneNumberValidator, 'i');
const nameValidator = new RegExp(regex.nameValidator, 'i');

const initialState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  address: '',
};

const ContactForm = ({
  open,
  initialFormState,
  handleClose,
  handleUpateContactList,
}) => {
  const [formState, setFormState] = useState(initialState);
  const [isInvalid, setIsInvalid] = useState({});
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (Object.keys(initialFormState)?.length > 0) {
      setFormState({ ...initialFormState });
    }
  }, []);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    const newFormState = { ...formState };
    newFormState[name] = value;
    setFormState(newFormState);
  };

  const handleOnblur = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        if (value?.length <= 0 || !nameValidator.test(value)) {
          toggleFieldInvalidationState({
            name,
            errorMessage: 'Please enter a valid name',
            invalid: true,
          });
          return;
        }
      case 'company':
      case 'address':
        if (value?.length <= 0) {
          toggleFieldInvalidationState({
            name,
            errorMessage: 'Please enter a valid input',
            invalid: true,
          });
          return;
        }
        break;
      case 'email':
        if (value?.length <= 0 || !emailValidator.test(value)) {
          toggleFieldInvalidationState({
            name,
            errorMessage: 'Please enter a valid email',
            invalid: true,
          });
          return;
        }
        break;
      case 'phone':
        if (value?.length <= 0 || !phoneNumberValidator.test(value)) {
          toggleFieldInvalidationState({
            name,
            errorMessage: 'Please enter a valid phone number',
            invalid: true,
          });
          return;
        }
        break;
      default:
        break;
    }
    toggleFieldInvalidationState({
      name,
      invalid: false,
    });
  };

  // Update the component error state
  const toggleFieldInvalidationState = ({ name, errorMessage, invalid }) => {
    invalid
      ? setIsInvalid({ ...isInvalid, [name]: errorMessage })
      : isInvalid.hasOwnProperty(name) &&
        setIsInvalid(
          produce(isInvalid, (draft) => {
            delete draft[name];
          }),
        );
  };

  const checkFieldEmpty = () => {
    let error = false;
    const updateisInvalid = { ...isInvalid };
    for (let field in formState) {
      if (!formState[field]) {
        updateisInvalid[field] = `Please provide a valid value for ${field}`;
        error = true;
      }
    }
    setIsInvalid(updateisInvalid);
    return error;
  };

  const handleFormSubmit = () => {
    if (Object.keys(isInvalid)?.length > 0) {
      setFormError('Please resolve the hightlighted issue');
      return;
    }
    if (checkFieldEmpty()) {
      setFormError('Please resolve the hightlighted issue');
      return;
    }

    handleUpateContactList(formState);
  };

  return (
    <Modal open={open} handleClose={handleClose}>
      <div className="contact-form">
        <div className="contact-form_header">
          <span className="title">Contact Form</span>
          <span className="description">
            Fill details to add or update contact in list
          </span>
          {formError && <span className="error-message">{formError}</span>}
        </div>
        <div className="contact-form_body">
          <TextField
            name="name"
            placeholder="Please enter your name."
            value={formState?.name ?? ''}
            error={isInvalid?.hasOwnProperty('name')}
            helperText={isInvalid?.name}
            onBlur={handleOnblur}
            onChange={handleOnChange}
          />
          <TextField
            name="email"
            placeholder="Please enter your email."
            type="email"
            value={formState?.email ?? ''}
            error={isInvalid?.hasOwnProperty('email')}
            helperText={isInvalid?.email}
            onBlur={handleOnblur}
            onChange={handleOnChange}
          />
          <TextField
            name="phone"
            placeholder="Please enter your phone no."
            value={formState?.phone ?? ''}
            error={isInvalid?.hasOwnProperty('phone')}
            helperText={isInvalid?.phone}
            onBlur={handleOnblur}
            onChange={handleOnChange}
          />
          <TextField
            name="company"
            placeholder="Please enter your company name"
            value={formState?.company ?? ''}
            error={isInvalid?.hasOwnProperty('company')}
            helperText={isInvalid?.company}
            onBlur={handleOnblur}
            onChange={handleOnChange}
          />
          <TextField
            name="address"
            placeholder="Please enter your address"
            multiline={true}
            maxRows={2}
            type="address"
            value={formState?.address ?? ''}
            error={isInvalid?.hasOwnProperty('address')}
            helperText={isInvalid?.address}
            onBlur={handleOnblur}
            onChange={handleOnChange}
          />
        </div>
        <Button fullWidth={true} content="Submit" onClick={handleFormSubmit} />
      </div>
    </Modal>
  );
};

export default ContactForm;

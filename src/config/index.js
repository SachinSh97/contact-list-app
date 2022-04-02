export const regex = {
  emailValidator:
    /^[a-zA-Z0-9](?!.*?\.\.)[a-zA-Z0-9-_\.]+@([a-zA-Z0-9_\-.]+){2}\.([a-zA-Z]{2,5})$/,
  phoneNumberValidator: /^[(]{0,1}[0-9]{1,4}[)]{0,1}[\s/0-9]*$/,
  nameValidator: `^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$`,
};

export const contactTableColumn = [
  { title: '', accessor: 'edit' },
  { title: 'Basic Info', accessor: 'info' },
  { title: 'Company', accessor: 'company' },
];

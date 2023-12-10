export const ContactItem = ({ contactName, contactNumber }) => {
  return (
    <li name="contact">
      {contactName}: {contactNumber}
    </li>
  );
};

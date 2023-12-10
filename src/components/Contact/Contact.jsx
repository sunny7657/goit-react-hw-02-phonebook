// import { nanoid } from 'nanoid';

export const Contact = ({ contacts }) => (
  <ul>
    {contacts.map(contact => {
      const { name, number, id } = contact;
      return (
        <li name="contact" key={id}>
          {name}: {number}
        </li>
      );
    })}
  </ul>
);

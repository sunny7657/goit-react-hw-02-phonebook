// export class FormAddContact extends Component {
//   state = {
//     contacts: [],
//     name: '',
//     number: '',
//   };

//   handleChange = evt => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     const { name, contacts } = this.state;
//     contacts.push(name);

//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     console.log(this.state);
//     return (
//       <>
//         <Section title="Phonebook">
//           <form onSubmit={this.handleSubmit}>
//             <label>
//               Name
//               <input
//                 type="text"
//                 name="name"
//                 required
//                 value={this.state.name}
//                 onChange={this.handleChange}
//               />
//             </label>
//             <label>
//               Number
//               <input
//                 type="tel"
//                 name="number"
//                 required
//                 value={this.state.number}
//                 onChange={this.handleChange}
//               />
//             </label>
//             <button type="submit">Add contact</button>
//           </form>
//         </Section>
//         <Section title="Contacts">
//           {this.state.contacts.length > 0 && (
//             <Contact
//               contacts={this.state.contacts}
//               number={this.state.number}
//             />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
